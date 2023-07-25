const http=require('http')
const express=require('express')
const BodyParser=require('body-parser')
const app=express();
app.use(BodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
 res.send('<form action="/final" method="POST"><input name="data" type="text" value=""/><input name="size" type="number"/><button type="submit" >submit</button></form>')
})
app.post('/final',(req,res,next)=>{
 console.log("both submition occur")
  console.log(req.body)
  res.redirect('/add-product')
})
const server=http.createServer(app);
server.listen(3000) 