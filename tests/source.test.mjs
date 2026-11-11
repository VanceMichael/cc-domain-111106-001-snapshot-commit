import {test} from 'node:test';
import assert from 'node:assert/strict';
import {inspect,readSnapshot} from '../src/source.mjs';
import {readFixture} from '../src/files.mjs';
const sample=await readFixture('snapshot-17.json');
test('原件读取与结构边界',async()=>{

assert.equal(readSnapshot(sample).files.length,2);assert.equal(inspect(sample).parent,'16');
assert.throws(()=>readSnapshot(Buffer.from('{"snapshot_id":"x","files":[{"file_id":"a","partition":{},"row_count":-1}]}')),/行数/);
const duplicate={snapshot_id:'x',files:[{file_id:'a',partition:{},row_count:0},{file_id:'a',partition:{},row_count:0}]};
assert.throws(()=>readSnapshot(Buffer.from(JSON.stringify(duplicate))),/重复/);

});
test('样本读取范围',async()=>{await assert.rejects(readFixture('../package.json'),/越界/);await assert.rejects(readFixture('absent.data'),/ENOENT/);});
