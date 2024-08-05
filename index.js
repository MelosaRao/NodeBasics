const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    
    if(req.url=="/"){
    fs.readFile('index.html',(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })}

    else if(req.url=="/about"){
        fs.readFile('about.html',(err,data)=>{
            if(err){
                console.log(err)
                res.end()
            }
            else{
                res.write(data)
                res.end()
            }
        })}

    else if(req.url=="/contact"){
            fs.readFile('contact-me.html',(err,data)=>{
                if(err){
                    console.log(err)
                    res.end()
                }
                else{
                    res.write(data)
                    res.end()
                }
            })}

    else{
        fs.readFile('404.html',(err,data)=>{
            if(err){
                console.log(err)
                res.end()
            }
            else{
                res.write(data)
                res.end()
            }})
    }
    
    
})
server.listen(8080, 'localhost', ()=>{
    console.log('listening')
})

