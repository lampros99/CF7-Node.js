const User = require('../models/user.model');

function findAll(){
    const result = User.find();
    return result;
}

function findOne(username){
    const result = User.findOne({username:username});
    return result;
}

function findLastInsertedUser(){
    console.log('find lst inserted user');

    try{
        const result = User.find().sort({_id:-1}).limit(1)
        console.log("Success in finding last inserted user", result);
        return result
    }catch(err){
        console.log('Problem in finding last inserted user', err)
        return false
    } 
}

module.exports = {findAll, findOne, findLastInsertedUser};