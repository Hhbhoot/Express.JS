const User = require('../model/User2.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signUp = async (req, res) => {
    try {

        const { FirstName, LastName, Email, Password, Gender } = req.body;

        let user = await User.findOne({ Email: Email }, { isDelete: false })
        if (user) {
            return res.json({ message: "User Already Exists.." })
        }
        let salt = 10; // devide password into 10 parts and encrypt
        let hashPassword = await bcrypt.hash(Password, 10);
        user = await User.create({
            FirstName, LastName, Email,
            Password: hashPassword,
            Gender
        });
        user.save();
        res.status(201).json({ message: " User Added.." });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: " Internal Server Error.." })
    }

}

exports.Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        let user = await User.findOne({ Email: Email }, { isDelete: false });
        if (!user) {
            return res.json({ message: " User Not Found..  " })
        }

        let checkPassword = await bcrypt.compare(Password, user.Password);
        if (!checkPassword) {
            return res.json({ message: "Password Not Matched.." })
        }
        let payload = {
            userId: user._id
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY)
        console.log(token)
        res.status(200).json({ token, message: "Login Success" });

    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error.." })
    }
};

exports.getUser = async (req, res) => {
    try {
        res.json(req.user)
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error.." })
    }

};

exports.
    updateUser = async (req, res) => {
        try {
            let user = await User.findByIdAndUpdate(req.user._id, { $set: { ...req.body } }, { new: true })
            res.status(200).json({ user, message: "User is updated.." })
        }
        catch (err) {
            res.status(500).json({ message: "Internal Server Error.." })
        }

    }
    exports.changePassword = async (req,res)=>{

        try{
           const { currentPassword , newPassword,confirmNewPassword} = req.body ;
            
           let checkPassword = await bcrypt.compare(currentPassword,req.user.password);
           if(!checkPassword){
            console.log("Please Enter correct current password...")
            res.json({message : "pls Enter correct current password"})
           }
           if(newPassword === confirmNewPassword)
           {
              let hashPassword = await bcrypt.hash(newPassword,10);
      
              let user = await User.findByIdAndUpdate(req.user._id,{ $set : { password : hashPassword}}, { new : true});
      
              user.save();
              res.status(201).json({ message : "Password Upadated bSuccessfully.."})
           }
           else{
            res.json({ message : "Pls enter correct newPasswod and confirmNewPassword.."})
           }
        
        }
        catch (err) {
          console.log(err);
          res.json({ message: "Internal Server Error.." });
      }
      }