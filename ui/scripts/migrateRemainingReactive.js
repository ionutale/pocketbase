#!/usr/bin/env node
// Enhanced migration for leftover legacy `$:` reactive statements to Svelte 5 runes APIs.
// Handles:
//  1. `$: { ... }` blocks -> $effect(() => { ... });
//  2. `$: if (cond) { ... }` -> $effect(() => { if (cond) { ... } });
//  3. `$: someCall(expr)` -> $effect(() => { someCall(expr); });
//  4. `$: name = <expr>;` (single or multi-line) -> let name = $derived(<expr>);
//  5. `$: name =` multi-line expressions ending with first top-level semicolon.
// Skips lines already transformed (containing $effect or $derived after $:).
// NOTE: Heuristic; manual review recommended.

import { globby } from 'globby';
import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd(), 'src/components');

function transform(script) {
  const lines = script.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (!line.includes('$:')) continue;
    if (/\$effect|\$derived/.test(line)) continue; // already processed

    // Block `{` form
    if (/^\s*\$:\s*\{\s*$/.test(line)) {
      lines[i] = line.replace('$:', '$effect(() =>');
      // find matching brace depth
      let depth = 0;
      for (let j = i; j < lines.length; j++) {
        const l = lines[j];
        for (const ch of l) {
          if (ch === '{') depth++; else if (ch === '}') depth--;
        }
        if (depth === 0) { lines[j] = lines[j] + ');'; break; }
      }
      continue;
    }
    // If form
    if (/^\s*\$:\s*if\b/.test(line)) {
      lines[i] = line.replace('$: if', '$effect(() => { if');
      let depth = 0;
      for (let j = i; j < lines.length; j++) {
        const l = lines[j];
        for (const ch of l) { if (ch === '{') depth++; else if (ch === '}') depth--; }
        if (depth === 0) { lines[j] = lines[j] + ');'; break; }
      }
      continue;
    }
    // Call form
    if (/^\s*\$:\s*[A-Za-z_$][\w$]*\s*\(.*\)\s*;?\s*$/.test(line)) {
      const indent = line.match(/^(\s*)/)[1];
      const expr = line.replace(/^\s*\$:\s*/, '').replace(/;\s*$/, '');
      lines[i] = `${indent}$effect(() => { ${expr}; });`;
      continue;
    }
    // Assignment (possibly multi-line)
    if (/^\s*\$:\s*[A-Za-z_$][\w$]*\s*=/.test(line)) {
      const m = line.match(/^(\s*)\$:\s*([A-Za-z_$][\w$]*)\s*=\s*(.*)$/);
      if (m) {
        const [, indent, name, afterEq] = m;
        // Begin replacement
        lines[i] = `${indent}let ${name} = $derived(${afterEq}`; // may need to finish
        // find end (top-level semicolon balancing parens/brackets/braces)
        let depth = 0; let ended = /;\s*$/.test(afterEq) && !/[({[]/.test(afterEq); // simple single-line
        if (!ended) {
          for (let j = i; j < lines.length; j++) {
            if (j !== i) {
              lines[j] = lines[j];
            }
            const l = lines[j];
            for (let k = 0; k < l.length; k++) {
              const ch = l[k];
              if ('({['.includes(ch)) depth++;
              else if (')}]'.includes(ch)) depth--;
            }
            if (depth <= 0 && /;\s*$/.test(l)) { // terminate
              lines[j] = lines[j] + ' )';
              break;
            }
          }
        } else {
          lines[i] = lines[i].replace(/;\s*$/, ');');
        }
      }
    }
  }
  return lines.join('\n');
}

function processFile(abs) {
  const original = fs.readFileSync(abs, 'utf8');
  const updated = original.replace(/<script(.*?)>([\s\S]*?)<\/script>/g, (m, attrs, body) => {
    const newBody = transform(body);
    return `<script${attrs}>${newBody}</script>`;
  });
  if (updated !== original) {
    fs.writeFileSync(abs, updated, 'utf8');
    console.log('Reactive migrated', path.relative(root, abs));
  }
}

(async () => {
  const files = await globby(['**/*.svelte'], { cwd: root });
  for (const rel of files) processFile(path.join(root, rel));
})();