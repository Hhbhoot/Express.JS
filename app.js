const express = require('express')
const app = express();
const fs = require('fs');

const path = require('path');

//middleware

//  app.use((req,res,next)=>{
//     //    console.log(req.query)
//     if(req.query.password == '1234'){
//         next();
//     }
//     else{
//         res.sendStatus(401)
//     }      
// })

// middlewre control routing

const auth = (req,res,next)=>{

    if(req.query.password == '1234'){
        next();
    }
    else{
        res.sendStatus(401);
    }
}



app.get('/',auth,(req,res)=>{

        res.sendFile(path.join(__dirname,'carts.json'))
    // res.sendStatus(401);
})
app.post('/',(req,res)=>{

    res.json({ type : " POST method"})    
})

app.put('/',(req,res)=>{

    res.json({type : " PUT method"})
    // res.sendStatus(404);
})

app.patch('/',auth,(req,res)=>{

    // res.send("This is Patch Method");
    res.json({type : "PATCH method"})
})
app.delete('/',(req,res)=>{

    // res.send("This Is Delete Method");
    res.json({type : "DELETE method"})
})

app.listen(7878,(err)=>{
    if(err){
        conbsole.log(err)
    }
    else{
        console.log("Serverv started....")
    }
})