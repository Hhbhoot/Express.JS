const jwt = require('jsonwebtoken');
const User = require('../model/User2.model');

exports.verifyToken = async (req, res, next) => {

    let token = req.headers['authorization'].split(" ")[1];
    // console.log(token)
    let { userId } = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(userId)

    req.user = await User.findById(userId);
    if (req.user) {
        next();
    } else {
        res.json({ message: "invalid user.." })
    }
}
