const express = require('express');
const fs = require('fs');
const morgan =  require('morgan');
const path = require('path');

const carts = require('./public/carts.json');
const Product = require('./public/product.json');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res,next)=>{

    res.json(Product);
    next();
})

app.post('/',(req,res,next)=>{

    res.json(Product);
    next();
})

//Replace Data

app.put('/product/:id',(req,res)=>{

    const Id = +req.params.id;
    const itemIndex = Product.findIndex((p)=> p.id === Id);
   
      Product.splice(itemIndex,1,{...req.body,id:Id})
      res.status(200).json( {message : "Product Replaced"})

})

// Update Data

app.patch('/product/:id',(req,res,next)=>{

    const Id = +req.params.id;
    const itemIndex = Product.findIndex((p)=>p.id === Id);
    let item =Product[itemIndex];
    // console.log(Id);
    console.log(itemIndex);
    console.log(item);


     item =Product.splice(itemIndex,1,{...item,...req.body ,});
     res.json({ message : "Product Updated" , Data : item})

})   

app.delete('/product/:id',(req,res)=>{

        let id = req.params.id ;
        let itemIndex =Product.findIndex((p)=>p.id === id);
        
        let data = Product.splice(itemIndex,1);
        res.json({message : "Delete Succesfull",Data : data })
})

app.listen(4545,(err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log("Server Started...")
    }
})