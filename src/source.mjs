export function readSnapshot(bytes) {
 const s=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
 if(typeof s.snapshot_id!=='string'||!Array.isArray(s.files)) throw new Error('快照结构不正确');
 const seen=new Set();
 for(const f of s.files) {
  if(typeof f.file_id!=='string'||seen.has(f.file_id)) throw new Error('文件身份缺失或重复');
  if(!f.partition||typeof f.partition!=='object'||Array.isArray(f.partition)) throw new Error('分区必须是对象');
  if(!Number.isSafeInteger(f.row_count)||f.row_count<0) throw new Error('行数无效');
  seen.add(f.file_id);
 }
 return s;
}
export function inspect(bytes) {const s=readSnapshot(bytes);return {snapshot:s.snapshot_id,parent:s.parent,files:s.files.map(f=>({id:f.file_id,partition:f.partition,rows:f.row_count}))};}
