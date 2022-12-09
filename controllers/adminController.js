
const adminModel = require('../models/adminModel')
const bcrypt=require('bcrypt')

module.exports = {

    register: async (req, res) => {

        const { password, email } = req.body
        // tester l'existance de user avec email
        const user = await adminModel.findOne({ email: email })
    
        if (user)
            return res.status(422).json({
                messaage: 'user invalid credantials',
                errors: {
                    details: [
                        {
                            "message": "user with this email is already exist!",
                            "path": [
                                "email"
                            ]
                        }
                    ]
                }
            })
    
         const passwordhash = await bcrypt.hash(req.body.password, 10) // cryptage password 
    
         req.body.password = passwordhash
    
         adminModel.create(req.body, function (err,user) {
    
                        if (err)
                            return res.status(500).json({ msg: "error found"+err, error: true })
                        else {
                            return res.status(200).json({ isAuthenticated: true, user: { email,role:user.__t}, error: false })
                        }

        })          
    },

}
