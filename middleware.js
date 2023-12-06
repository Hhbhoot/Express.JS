const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express();
const morgan = require('morgan');

// middleware

// app.use(express.static('public'))
 app.use(express.json())
//  app.use(morgan('tiny'))
// app.use(morgan('default'))

app.use(express.urlencoded({ extended : false}))

// app.use((req,res,next)=>{

//     // console.log(req.query)
//     next();

// })

const auth = (req,res,next)=>{
    console.log(req.body)

    if(req.body.name == "Hitesh"){
    next();
    }
    else{
        res.sendStatus(401)
    }

}

app.get('/',auth,(req,res)=>{

    res.json({ type : "Get method"})
})

app.post('/',(req,res)=>{

    res.json({ type : "post method"})
})
app.listen(4505,()=>{
    console.log("sever started...")
})