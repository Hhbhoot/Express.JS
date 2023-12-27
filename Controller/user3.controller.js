
const User = require('../model/user3.model');

exports.register = (req,res)=>{
    // console.log(req.body)
    res.render('register')
}

exports.addUser = async(req,res)=>{
    // console.log(req.body);
    let user = await User.create({...req.body});
    user.save();
    res.redirect('/user2/register');
     
}
