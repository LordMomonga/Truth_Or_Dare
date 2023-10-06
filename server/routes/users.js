const router = require("express");
const {User, validate} = require("../models/user");
const bcrypt = require("bcrypt");
router.post("/", async(req, res) => {
    try {
      const {error} = validate(req.body);
      if(error)
      return res.status(400).send({message:error.details[0].message})

      const user = await User.findOne({email:req.body.email});
        
      if(user) 
        return res.status(409).send({message: "User with email alreqdy exist"})

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.hashPassword, salt);

       const newUser =  await new User({
        
        pseudo: req.body.pseudo,
      email: req.body.email,
      password: hashPassword,});
       newUser.save();
        res.status(201).send({message: "User created successfully"})
    } catch (error) {
        res.status(500).send({message:"Internal Server"});
        
    }

})

module.exports = router;