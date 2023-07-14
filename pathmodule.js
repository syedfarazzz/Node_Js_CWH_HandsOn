const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
const b1 = path.dirname('/foo/bar/baz/asdf/quux');
const b2 = path.dirname(__dirname);
console.log(a);
console.log(b1, b2);

const C = path.extname(__filename);
console.log(C);
