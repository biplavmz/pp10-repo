// input -> ??

let fs = require("fs")
let input = process.argv.slice(2);
console.log("input" , input);
let options = [];
let filePaths = [];
for(let i = 0;i< input.length; i++){
    // first character is string
    if(input[i] == "-s" || input[i] == "-b" || input[i] == "-n"){
        options.push(input[i]);
    }else{
        filePaths.push(input[i]);
    }
}
console.log("options" , options);
console.log("filePath" , filePaths);

//check all file path exist
for(let i = 0 ;i<filePaths.length;i++){
    let isfilepresent = fs.existsSync(filePaths[i]);
    if(isfilepresent == false){
        console.log("filepath",filePaths[i],"does not exist");
        return;
    }

}

//read n number of files 
//with the help of file path read files
let totalcontent = " "
for(let i = 0;i<filePaths.length;i++){
    let contentofcurrent = fs.readFileSync(filePaths[i],"utf-8")
    totalcontent += contentofcurrent;
}
//implements
let isSoption = options.includes("-s");
//to implement -s option 
//
if(isSoption==true){
    let outputarr = totalcontent.split("\r\n");
    //empty line break remove
    //idenitify empty line breaks
    console.log(outputarr);

    //remove
    let temparr = [];
    for(let i = 0;i<contentarr.length;i++){
        if(contentarr[i] !==""){
            temparr.push(contentarr[i]);
        }
    }
    totalcontent = temparr.join("\n")
}
console.log(totalcontent);

let isN = options.includes("-n");

if(isN == true){
    let count = 1;

let contentarr = totalcontent.split("\r\n");
for(let i = 0;i<contentarr.length;i++){
    contentarr[i] = count+" "+contentarr[i];
    count++;
}
totalcontent = contentarr.join("\r\n");
}
//console.log(totalcontent);


//we have to pass -b where -b will give numbering to non-empty lines


let isn = options.includes("-n");
let isb = options.includes("-b");
let finaloption;
if(isn==true){
    if(isb==true){
        let idxb = options.indexOf("-b")
        let idxn = options.indexOf("-n")
        finaloption = idxb<idxn ? "-b":"-n";
    }
    else{
        finaloption = "-n";
    }
}else if(isb==true){
    finaloption = "-b";

}
