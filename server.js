const server=require("node:http")
server.createServer((req,res)=>{

    console.log(req.url);

    const foods=['Biryani','Curd','Sambar']

    if(req.url === '/posts'){
        res.write('PPost Page')
    }
    else if(req.url==='/admin')
    {
        res.write('Admin Page');

    }
    else{
            res.write(JSON.stringify(foods))
        }
      res.end()
}).listen(6969);