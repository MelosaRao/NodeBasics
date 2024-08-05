/*const http = require('http')
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
})*/



const express = require("express");
const app = express();
const path = require('path');

const options = {
    root: path.join(__dirname)
};
function toapp (req, res, fileName){
    res.sendFile(fileName, options, function (err) {
    if (err) {
        console.error('Error sending file:', err);
    } else {
        console.log('Sent:', fileName);
    }
    })}


app.get("/", (req,res)=>toapp(req, res, 'index.html'));
app.get("/about", (req,res)=>toapp(req, res, 'about.html') );
app.get("/contact-me", (req,res)=>toapp(req, res, 'contact-me.html') );
app.get('*', (req, res) => toapp(req, res, '404.html'))

const PORT = 8080;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
