let fs=require("fs");     //import like java in nodeJs it is require all thing already implimented in nodeJs framework we can use all.
let path=require("path");  //path module is use to platform independent (fight bill gates vs steve jobs)
//taking input array for all folder which we have to created
let inputArr=process.argv.slice(2);  //here we use slice for remove "node" and "filename.js"
//["web dev" , javascript, browser ,react]  <--it is my array input
//now in array first directory we take -->web dev
let mainDir=inputArr[0];  //mainDir=web dev
let cwd=process.cwd();    // it gives us to current directory path (currentDirectory ==directoryCreater.js)
let mainDirPath=path.join(cwd,mainDir);  //path.join means it join folder to that path (abi folder nahi create hua hai) it is only for path for that folder 
let isMainModulePresent=fs.existsSync(mainDirPath);  // it is only for check path exist or not if path alredy exist means we do  n0t create new folder for same path
if(isMainModulePresent)
{
    console.log("Dir is already created");
    return;
}
else{
    console.log(mainDir,"created");  //  ouput -->web dev created
    fs.mkdirSync(mainDirPath);     // now first folder is created web dev

let topicFromInput=inputArr.slice(1,4);  //  == [javascript ,browser,react]
for(let i=0;i<topicFromInput.length;i++)
{
    let cTopicPath=path.join(mainDirPath,topicFromInput[i]);  //it connect web dev-->javascript
    console.log(topicFromInput[i],"created");     //output-->javascript  created
    fs.mkdirSync(cTopicPath);  // second javascript folder is created in web dev folder
    //now time to create module folder 5 module soo
    for(let j=1; j<=5; j++)   // it loop for module folder 1 to 5 create
    {
        let modulePath=path.join(cTopicPath,"Module"+j);
        fs.mkdirSync(modulePath);  // module 1 is created
        console.log("Module"+j,"created Inside" ,topicFromInput[i]);  //output-->Module 1 created Inside javascript
        let filePath=path.join(modulePath,"content.md");  //create file path to add file
        fs.writeFileSync(filePath," # Hello");  //write hello in file content.md
    }
}
}


//*******************************************************************OUTPUT*******************************************************************************
// web dev created
// javascript created
// Module1 created Inside javascript
// Module2 created Inside javascript
// Module3 created Inside javascript
// Module4 created Inside javascript
// Module5 created Inside javascript
// browser created
// Module1 created Inside browser
// Module2 created Inside browser
// Module3 created Inside browser
// Module4 created Inside browser
// Module5 created Inside browser
// react created
// Module1 created Inside react
// Module2 created Inside react
// Module3 created Inside react
// Module4 created Inside react
// Module5 created Inside react
