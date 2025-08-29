let http = require("http");
let fs = require ("fs");



let Home1 = fs.readFileSync("./Home1.html","utf-8");
let About1 = fs.readFileSync("./About1.html","utf-8");
let Services1 = fs.readFileSync("./Services.html","utf-8");
let Contact1 = fs.readFileSync("./Contact1.html","utf-8");




let Server1 = http.createServer((req,res)=>{

if(req.url == "/"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(Home1)
}

else if(req.url == "/About1"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(About1)
}

else if (req.url == "/Services1"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(Services1)
}

else if (req.url == "/Contact1"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(Contact1)
}

})

Server1.listen(5000,()=>{
    console.log("http://localhost:5000");
    
})