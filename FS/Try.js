let fs = require ("fs").promises;
// let fs = require("fs")




// Read the file
// fs.promises.readFile("./A.txt","utf-8")
// .then((d)=>{
//     console.log("Data readed from :" +d);
    
// })
// .catch((e)=>{
//     console.log("Error");
    
// })


// Create the file
// fs.promises.writeFile("./B.txt","Test")
// .then(()=>{
//     console.log("FileCreated");
    
// })
// .catch(()=>{
//     console.log("Error");
    
// })


// Add the file content
// let K = `GOOD MORNING`
// fs.promises.appendFile("./B.txt",`\n${K}`)
// .then(()=>{
//     console.log("Success");
    
// })
// .catch((e)=>{
//     console.log("Error"+e);
    
// })



// Change the file name
// fs.promises.rename("./B.txt","C.txt")
// .then((d)=>{
// console.log("Renamed"+d);

// })
// .catch((e)=>{
//     console.log("Error"+e);
    
// })


// deleted the file
// fs.promises.unlink("./C.txt")
// .then((d)=>{
// console.log("Del"+d);

// })
// .catch(()=>{
//     console.log("Error"+e);
    
// })




async function Process(){
try{
let Data = await fs.readFile("./C.txt","utf-8");
await fs.writeFile("./N.txt",Data);
await fs.appendFile("./N.txt","\n new line added");
await fs.mkdir("./FS");


}
catch(e){
console.log("Error!!!");

}
}

Process();