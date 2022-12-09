const advertiserModel = require('../models/advertiserModel');
const { advertiserValidation } = require('../validation/userValidation');

module.exports = {

    register: async (req, res) => {

        const { email, password } = req.body;
        const { error } = advertiserValidation(req.body);

        if (error)
            return res.status(422).json({
                success: false,
                errors: error,
                message: 'user data validation error'
            })

        else {

            advertiserModel.findOne({ email }, function (err, user) {

                if (err) return res.status(500).json({ msg: err.message, error: true });
                if (user)
                    return res.status(422).json({
                        message: "user with this email is already exist!",
                        errors: {
                            details: [
                                {

                                    "path": [
                                        "email"
                                    ],
                                    "message": [
                                        "email déja utilisé"
                                    ]
                                }
                            ]
                        }
                    })


                else {
                    
                    advertiserModel.create(req.body, function (err, user) {


                        if (err)
                            return res.status(500).json({ msg: err.message, error: true })
                        else {
                            return res.status(200).json({ isAuthenticated: true, user: { email, role: user.__t }, error: false })
                        }

                    })
                }
            })
        }

    }
}