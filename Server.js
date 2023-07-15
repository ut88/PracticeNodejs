const http=require('http')

const server=http.createServer((req,res)=>{
  const url=req.url;
  console.log(url);
  if(url==='/Home'){
    console.log("Welcome Home")
    res.write('<h1>Welcome Home</h1>')
    return res.end();
  }
  if(url==='/About'){
    console.log("Welcome to About Us Page")
    res.write('<h1>Welcome to About Us Page</h1>')
    return res.end();
  }
  if(url==='/Node'){
    console.log("Welcome to my Node js Project")
    res.write('<h1>Welcome to my Node js Project</h1>')
    return res.end();
  }
})

server.listen(3000) 