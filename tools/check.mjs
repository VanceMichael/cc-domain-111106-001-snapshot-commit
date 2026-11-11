import {readdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
async function check(dir) {
 for(const f of await readdir(dir,{withFileTypes:true})) {
  const p=`${dir}/${f.name}`;
  if(f.isDirectory()) await check(p);
  else if(p.endsWith('.mjs')) {const r=spawnSync(process.execPath,['--check',p],{stdio:'inherit'});if(r.status!==0)process.exit(r.status??1);}
 }
}
for(const dir of ['src','tests','tools'])await check(dir);
console.log('语法检查通过');
