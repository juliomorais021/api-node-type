import express from 'express'
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
  return res.send('olá dev')
})


app.listen(port,()=>{
    console.log(`back-end rodando na porta: ${port}`)
})