const http=require('http')

const server=http.createServer((req,res)=>{
  console.log("utkarsh badoni")
  res.write('<h1>Utkarsh badoni</h1>')
  res.end();
})

server.listen(4000) 