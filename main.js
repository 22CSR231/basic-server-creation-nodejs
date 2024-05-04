import { log} from 'console'
import express from 'express'
const app=express()
const PORT=6968

app.get('/',(req,res)=>{
    res.send("Hello, I'm learning API's")

})

app.listen(PORT,()=>
{
    console.log(`Server is listening on: http://localhost: ${PORT}`);
})