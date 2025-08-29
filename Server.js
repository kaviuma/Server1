let http = require("http")
let fs = require("fs");


let Home = fs.readFileSync("./Home.html","utf-8");

let About = fs.readFileSync("./About.html","utf-8");

let Contact = fs.readFileSync("./Contact.html","utf-8");

let Services = fs.readFileSync("./Services.html","utf-8");



let server = http.createServer((req,res)=>{

if (req.url == "/"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(Home)
}

else if (req.url == "/about"){

    res.writeHead(200,{"content-type":"text/html"})
    res.end(About)
}

else if (req.url == "/Contact"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(Contact)
}

else if (req.url == "/Services"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(Services)
}

})



server.listen (5000,()=>{
    console.log("http://localhost:5000");
    
})