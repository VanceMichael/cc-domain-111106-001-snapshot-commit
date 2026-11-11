import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export async function readFixture(name) {
 const base=path.join(root,'fixtures'),p=path.resolve(base,name);
 if(!p.startsWith(base+path.sep))throw new Error('样本路径越界');
 return readFile(p);
}
