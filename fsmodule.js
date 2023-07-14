const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) =>{
    console.log(err, data);
    //err ki jaga null ajaega print
    console.log("Finished reading non sync file");
})

console.log("Start Read Sync File");

const a = fs.readFileSync('file1.txt')
// console.log(a); it will not print value but a buffer
console.log(a.toString());

console.log("Finished reading sync file");

console.log("Start Write non sync File");

fs.writeFile('file2.txt', "non sync writeFile", ()=>{
    console.log("content of non sync writhefile has been written");
});
console.log("Finished Writing non Sync file");

console.log("Start Write Sync File");

fs.writeFileSync('file3.txt', "Sync WriteFile");

console.log("Finished Writing Sync file");
