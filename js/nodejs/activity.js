//  let say we have a folder and in this folder there are multiple file like img,video,txt,
// and so on we have to organise it on the bases of my programming

//solution let give a path and take input from the folder and  

 // To include a module, use the require() function with the name of the module

//the Node.js file system module allows you to work with the file system on your computer

//common use for file system(fs) module 

// 1)Read files
// 2)Create files
// 3)Upadate files
// 4)Delete files
// 5)Rename files

let fs = require('fs')
let path = require('path')
let extensions = {
    "imges":['.jpg','.jpeg','.svg'],
    "video":['.mp4','.mkv'],
    "Audio":['.mp3'],
    "Documents":['.xml','.dll','.txt']
}

let input = process.argv.slice(2) // slice 2 because in its 0th and 1st no path are define  
//for taking input from user we use process.argv

//activity.js "F:\Audacity" give a folder path in input 
let folderpath = input[0]
console.log(input[0])

let externalfolderpath = folderpath
function checkfolder(extensions,folderpath){

    for(let key in extensions)
    {
        let arr = extensions[key]
        //array includes value array exist or not

        let eon = arr.includes(extensions)
       if(eon==true)
       {
           console.log(key)
            break;
       }
       
    }

}

let content = fs.readdirSync(folderpath); // for read file under folder  0 because it is like string function arry will come
// console.log(content);

for(let i = 0;i<content.length;i++){
    // console.log(content[i])

    //The Path module provides a way of working with directories and file paths.

    //path.extname() Method path module in node 

    console.log(path.extname(content[i]));




// now we have to put formates according to there types  in there folder types
let extensionName = path.extname(content[i])
let externsionfolderexist = checkfolder(extensionName,folderpath)

}