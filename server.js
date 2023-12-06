const { error } = require('console');
const express = require('express')
const fs = require('fs')

const product = require('./carts.json')
const port = 8080 ;

const server = express();

server.get('/',(req,res)=>{

    res.send("Hello World From Hitesh...")                                                  
})

server.get('/product',(req,res)=>{

    res.send(product)
})

 server.get('/product/:username',(req,res)=>{

      res.send(`Hello world from ${req.params.username}`)
 })
server.listen(port,(err)=>{

    if(err){
        console.log(err)
        }
        else{

            console.log("Server started...")
        }
})

