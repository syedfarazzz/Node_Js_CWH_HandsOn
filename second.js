// function(exports, require, module, _filename, _dirname){

const myobj = {
    name : "Alex",
    favNum : 4
}
// }

console.log(exports, require, module, "filename= ",__filename, "dirname=",  __dirname);
module.exports = myobj;