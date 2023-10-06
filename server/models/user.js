const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    pseudo: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
});

//static signup method
userSchema.statics.signup = async function(pseudo, email, password){
    
    //validation
    if(!pseudo || !email || !password){
        throw Error('Remplir tout les champs')
      

    }
   
   
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough ')
    }
    const exists = await this.findOne({ email })
    const pseudoExist = await this.findOne({ pseudo})

    if(exists) {
        throw Error('Email already exist ')
    }
    if(pseudoExist) {
        throw Error('pseudo already exist ')
    }

    // mypasswordj87w38nsdn 
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ pseudo, email, password:hash})
    return user


}
//static login method
userSchema.statics.login = async function (pseudo, password) {
    if(!pseudo || !password){
        throw Error('All fields must be filled')

    }
    
    const user = await this.findOne({ pseudo})

    if(!user) {
        throw Error('Incorrect Pseudo')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }
    return user
   


}


module.exports = mongoose.model('User', userSchema);