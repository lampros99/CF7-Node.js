const User = require('../models/user.model');

exports.login() = async(req, res) => {
    console.log("Login user", req.body);

    const username = req.body.username;
    const password = req.body.password;


    try{
        const result = await User.findOne({username: username});

        if(result && result.username === username && result.password === password){
            res.status(200).json({status: true, data: "user logged in"})
        } else {
            res.status(404).json({status: false, data: "user not logged in"})
        }
    }catch(err){
        console.log("Problem in logging", err)
        res.status(400).json({status: false, data: err})
    }

}