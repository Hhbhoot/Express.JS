const User = require('../model/User2.model')
const bcrypt = require('bcrypt');

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
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error.." })
    }
}