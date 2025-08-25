#!/usr/bin/env node
/** Convert export let props to runes-friendly form using $props().
 * For each Svelte file with runes (contains $state or <svelte:options runes />),
 * replace leading `export let name = default;` with `let name = default;`.
 * (In runes mode simple let is enough for props – Svelte 5 auto-exposes.)
 */
import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd(), 'src');

function transform(content){
  return content.replace(/<script(\b[^>]*)?>([\s\S]*?)<\/script>/g,(m,attrs,body)=>{
    const lines = body.split(/\n/).map(l=>{
      if (/^\s*export\s+let\s+[A-Za-z_$][\w$]*\s*=/.test(l)) {
        return l.replace(/export\s+let/,'let');
      }
      if (/^\s*export\s+let\s+[A-Za-z_$][\w$]*\s*;/.test(l)) {
        return l.replace(/export\s+let/,'let');
      }
      return l;
    });
    return `<script${attrs||''}>`+lines.join('\n')+`</script>`;
  });
}

function walk(dir){
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir,f);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p); else if (p.endsWith('.svelte')) {
      let txt = fs.readFileSync(p,'utf8');
      if (txt.includes('$state(') || txt.includes('$effect(')) {
        const changed = transform(txt);
        if (changed !== txt) { fs.writeFileSync(p, changed, 'utf8'); console.log('Props migrated', path.relative(root,p)); }
      }
    }
  }
}
walk(root);
