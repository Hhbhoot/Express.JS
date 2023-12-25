require('dotenv').config();
const express = require('express');
const fs = require('fs');
const morgan =  require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/product.routes')
const ProductRoutes = require('./routes/product2.routes');
const userRoutes = require('./routes/user.routes')
const customerRoutes = require('./routes/customer.routes');
const UserRoutes = require('./routes/User2.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require("./routes/order.routes");
const authRoutes = require('./routes/auth.routes');
const imagePath = path.join(__dirname,'public','images')

const port = process.env.PORT ;
const app = express();


//password => Hitesh123@
mongoose.connect(process.env.MONGO_DB_URL)  
  .then(() => console.log('MongoDb Connected'))
  .catch((err)=>{
               console.log(err)
  });



app.use(express.json());
app.use(morgan('dev'));
app.use('/public/images',express.static(imagePath))

app.use('/product',productsRoutes);
app.use('/user',userRoutes);
app.use('/customer',customerRoutes);
app.use('/api/Product2',ProductRoutes)
app.use('/api/User',UserRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/order',orderRoutes)
app.use('/api/auth', authRoutes);


app.listen(port,(err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log("Server Started...")
    }
})