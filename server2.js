const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const carts = require('./public/carts.json')

const server = express();
server.use(morgan('dev'))
server.use(express.json());

// Create Data
// server.post('/carts',(req,res)=>{

//          carts.push(req.body);
//         //  res.json({ message : "Data Added", Data : req.body })
//         res.json(carts);
        
    
// })

server.post('/carts',(req,res)=>{

    if(req.query.password==='123'){
    console.log(req.baseUrl)
    carts.push(req.body);
    // res.json({message : "Data Added" , Data : req.body})
    res.json(carts)
}
else{
    res.sendStatus(401);
}
})
// read Data

// server.get('/carts',(req,res)=>{
//            res.status(201).json(carts)
// })

// server.get('/carts/:id',(req,res)=>{

//       let id = Number(req.params.id);
//       console.log(req.params)
//       console.log(id);
//     //   console.log(req);


//       let item = carts.find((p)=> p.id === id);
//       res.status(200).json(item);

// })

server.listen(8080,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server Started...")
    }
})