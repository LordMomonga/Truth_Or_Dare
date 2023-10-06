const User = require('../models/user')
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
     return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})

}

const loginUser = async (req, res) => {

    const {pseudo, password} = req.body

    try {
        const user = await User.login(pseudo, password)
        //creer un token
        const token = createToken(user._id)
        res.status(200).json({pseudo, token})

    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
   
}

const signupUser = async (req, res) => {
    const { pseudo, email, password } = req.body

    try {
        const user = await User.signup(pseudo, email, password)
        //creer un token
        const token = createToken(user._id)
        res.status(200).json({pseudo, email, token})

    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
   
}

module.exports = { signupUser, loginUser }