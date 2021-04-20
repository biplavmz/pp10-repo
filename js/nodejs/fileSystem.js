let  fs =  require('fs') // require is like import we have to import file fs from liberary

// let data = fs.readFileSync('abc.txt') //read files will read the file 

// console.log(data.toString()) // To change it to String from byte code

//if we want to write some date in file we will go for 

let wdata =  "This is some demo data ";
fs.writeFileSync('write.txt',wdata);

fs.appendFileSync('write.txt','this data is append ');

//delet file using node js 

// fs.unlinkSync('abc.txt');

// create folder using node js

// fs.mkdirSync('other');

// check file is exisist or not in node js

// fs.existsSync('F:\flutter\\dev');




