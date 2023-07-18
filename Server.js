const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
  const url=req.url;
  const method=req.method;
  if(url==='/'){ 
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
    res.write('</html>')
    return res.end();
  }
  if(url==='/message'&& method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
    body.push(chunk);
    })
    req.on('end',()=>{
      const parsedBody=Buffer.concat(body).toString();
      const message =parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message)
    })
    req.statusCode=302;
    req.setHeader('Location','/')
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<h1>Hello</h1>');
  res.write('</html>');
  res.end();
})

server.listen(3000) 
const guys="I'm from Server.js file "
module.exports={
  messenger:server,
  next:guys,
}