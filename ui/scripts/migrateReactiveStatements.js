#!/usr/bin/env node
/**
 * Converts legacy `$:` reactive statements to runes mode equivalents:
 *   $: foo = expr;        -> let foo = $derived(expr);
 *   $: if (cond) { ... }  -> $effect(() => { if (cond) { ... } });
 *   $: { ... }            -> $effect(() => { ... });
 *
 * Limitations: simplistic text transform; review diffs.
 */
import { globby } from 'globby';
import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd(), 'src');

function transformScript(content) {
  // handle block starts `$: {`
  // We'll replace and later append a closing `);` after matching brace.
  const lines = content.split(/\n/);
  const stack = [];
  for (let i=0;i<lines.length;i++) {
    const line = lines[i];
    if (/^\s*\$:\s*\{\s*$/.test(line)) {
      const indent = line.match(/^(\s*)/)[1];
      lines[i] = line.replace('$:', '$effect(() =>');
      // find matching brace
      let depth = 0;
      for (let j=i;j<lines.length;j++) {
        const l = lines[j];
        // naive count
        for (const ch of l) {
          if (ch === '{') depth++;
          else if (ch === '}') depth--;
        }
        if (depth === 0) { // closing brace line
          lines[j] = lines[j] + ');';
          break;
        }
      }
    } else if (/^\s*\$:\s*if\s*\(/.test(line)) {
      const replaced = line.replace('$: if', '$effect(() => { if');
      lines[i] = replaced;
      // find line with closing brace of this if (count braces from this line)
      let depth = 0;
      for (let j=i;j<lines.length;j++) {
        const l = lines[j];
        for (const ch of l) {
          if (ch === '{') depth++;
          else if (ch === '}') depth--;
        }
        if (depth === 0) { // after processing closing
          lines[j] = lines[j] + ');';
          break;
        }
      }
    } else if (/^\s*\$:\s*[A-Za-z_$][\w$]*\s*=/.test(line)) {
      // assignment
      const m = line.match(/^(\s*)\$:\s*([A-Za-z_$][\w$]*)\s*=\s*(.*);\s*$/);
      if (m) {
        const [, indent, name, expr] = m;
        lines[i] = `${indent}let ${name} = $derived(${expr});`;
      }
    }
  }
  return lines.join('\n');
}

function processFile(abs) {
  let text = fs.readFileSync(abs, 'utf8');
  const original = text;
  text = text.replace(/<script(\b[^>]*)?>([\s\S]*?)<\/script>/g, (m, attrs='', body) => {
    const newBody = transformScript(body);
    return `<script${attrs}>${newBody}</script>`;
  });
  if (text !== original) {
    fs.writeFileSync(abs, text, 'utf8');
    console.log('Reactive updated', path.relative(root, abs));
  }
}

(async () => {
  const files = await globby(['**/*.svelte'], { cwd: root });
  for (const rel of files) {
    processFile(path.join(root, rel));
  }
})();
