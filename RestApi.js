const express = require('express');
const fs = require('fs');
const morgan =  require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/product.routes')
const userRoutes = require('./routes/user.routes')
const customerRoutes = require('./routes/customer.routes');
const UserRoutes = require('./routes/User2.routes');
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Hitesh')
  .then(() => console.log('MongoDb Connected'))
  .catch((err)=>{
               console.log(err)
  });



app.use(express.json());
app.use(morgan('dev'));

app.use('/product',productsRoutes);
app.use('/user',userRoutes);
app.use('/customer',customerRoutes)
app.use('/api/User',UserRoutes)


app.listen(4545,(err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log("Server Started...")
    }
})