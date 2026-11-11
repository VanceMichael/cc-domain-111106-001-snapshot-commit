import {inspect} from './source.mjs';
import {readFixture} from './files.mjs';
console.log(JSON.stringify(inspect(await readFixture(process.argv[2]??'snapshot-17.json')),null,2));
