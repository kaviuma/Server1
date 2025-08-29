let http = require ("http");

let server = http.createServer((req,res)=>{

  if(req.url=="/"){
    res.writeHead(200,{"content-type":"text/html"})
    res.end(`Hello from Servor 
      <a href = "http://localhost:5000/about">About </a> ` )
  }

  else if (req.url == "/about"){
    let Output = ` <h1>About</h1> <a href = "http://localhost:5000">Home</a>`

    res.writeHead(200,{"content-type":"text/html"})
    res.end(Output)

  }

})

server.listen(5000,()=>{
    console.log("http://localhost:5000");
    
})






// simple web server
// const http = require('http');

// const server1 = http.createServer((req, res) => {
//   res.end('Hello from Node.js!');
// });

// server.listen(5000, () => {
//   console.log('Server is running on http://localhost:5000');
// });









// async
// const fs = require('fs');

// console.log("Start reading (async)");
// fs.readFile('A.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
// });
// console.log("Finished reading (async)");
