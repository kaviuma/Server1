let fs = require("fs");



let a = fs.readFileSync("./A.txt","utf8",(d,e)=>{  
    console.log(e);
    console.log(d);

    return d;

})


 fs.writeFileSync(`${a}.html`,"<h1>Hello</h1>",(e)=>{
        console.log(e);       
    })




