#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd(), 'src');

function processFile(p){
  const txt = fs.readFileSync(p,'utf8');
  if(txt.includes('$state(') && !txt.includes('<svelte:options runes')){
    fs.writeFileSync(p, '<svelte:options runes />\n'+txt, 'utf8');
    console.log('Added runes option to', path.relative(root,p));
  }
}
function walk(dir){
  for(const f of fs.readdirSync(dir)){
    const fp = path.join(dir,f);
    const st = fs.statSync(fp);
    if(st.isDirectory()) walk(fp); else if(f.endsWith('.svelte')) processFile(fp);
  }
}
walk(root);
