
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signToken = (uid, role) => { // utiliser pour le login 

  return jwt.sign({
    id: uid,
    role: role,
  }, process.env.JWT_SECRET, { expiresIn: '1h' });

}

module.exports = {


  login: (req, res) => {

    const { _id, email} = req.user;
    const token = signToken(_id);
    res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true });
    return res.status(200).json({ isAuthenticated: true, user: { email},role:req.user.__t ,token})

  },

//   login: async (req, res) => {

//     const { password, email } = req.body

//     // const { error } = validateuserModel(req.body)

//     // if (error)
//     //     return res.status(422).json({
//     //         success: false,
//     //         errors: error,
//     //         message: 'userModel data validation error'
//     //     })


//     const user = await userModel.findOne({ email: email })

//     if (!user) {
//         return res.status(422).json({
//             success: false,
//             errors: {
//                 details: [
//                     {
//                         path: ['email'], message: 'userModel with this email does not exist'
//                     }
//                 ]
//             },
//         })
//     }

//     const ismatch = await bcrypt.compare(password, user.password) 
//     console.log(ismatch);
//     if (!ismatch) {
//         res.status(422).json({
//             success: false,
//             errors: {
//                 details: [
//                     {
//                         path: ['password'], message: 'invalid password try again'
//                     }
//                 ]
//             },
//         })
//     } else {

      
//         const token = await signToken(user._id , userModel.role) 

//         res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true });

//         return res.status(200).json({ isAuthenticated: true, user: { email,role:user.__t}, error: false })

//     }

// },


  logout: (req, res) => {
    res.clearCookie("access_token");
    res.status(200).json({
      isConnected: false,
      message: " success logout"
    })
  },


  //Check auth status everytime front-end app refreshes
  authenticated: function (req, res) {
    
    const { email ,NumCarteEtudiant,name,lastName,PhoneNumber,Country,Street,PostalCode,avatar,Genre,_id  } = req.user;
    return res.status(200).json({ isAuthenticated: true, user: {_id,NumCarteEtudiant, email, role: req.user.__t,name,lastName,PhoneNumber,Country,Street,PostalCode,avatar,Genre }})
  
  },


  getAllUser: function (req, res, next) {

    userModel.find({}).exec((err, user) => {
      if (err) {
        res.json({ messsage: 'error', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'user application by id in BD', data: user, statut: 200 })
      }
    })

  },


  getUserById: function (req, res) {

    userModel.findById({ _id: req.params.id }).exec((err, user) => {
      if (err) {
        res.json({ messsage: 'error', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'user application by id in BD', data: user, statut: 200 })
      }
    })
  },

  getUserByrole: function (req, res) {

    userModel.findByRole({ role: req.params.role }).exec((err, user) => {
      if (err) {
        res.json({ messsage: 'error', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'user application by id in BD', data: user, statut: 200 })
      }
    })
  },


  deleteUserById: function (req, res) {
    userModel.findByIdAndDelete({ _id: req.params.id }, function (err, user) {
      if (err) {
        res.json({ messsage: 'error', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'user deleted successfuly', data: user, statut: 200 })
      }
    })
  },


  updateUserById: async function (req, res) {


    userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, user) {

      if (err) {
        res.json({ messsage: 'error ', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'user updated successfuly', data: user, statut: 200 })
      }
    })
  },

  uploadAvatar: (req, res) => {
    const data = {
      avatar: req.file.filename,
    };

    userModel.findByIdAndUpdate({ _id: req.params.id }, data, (err, user) => {
      if (err) {
        res.status(500).json({ message: "avatar not uploaded" });
      } else {
        userModel.findById({ _id: user.id }, (err, user) => {
          if (err) {
            res.json("error");
          } else {
            res.status(200).json({
              message: "user updated",
              data: user,
            });
          }
        });
      }
    });
  },

  activateAcount: (req, res) => {
    userModel.findByIdAndUpdate({ _id: req.user.id }, { isactive: true }, (err, user) => {
      res.json({
        success: true,
      })
    })
  },

  forgetPassword: async (req, res, next) => {

    const { email } = req.body

    const user = await userModel.findOne({ email: email })

    if (!user) {
      return res.status(422).json({
        messaage: 'invalid email',
        success: false,
        errors: {
          details: [
            {
              "message": "user with this email is not exist",
              "path": [
                "email"
              ]
            }
          ]
        }
      })
    }

    const token = signTokenWithoutExpiration(user._id)

    req.user = user
    req.mail = {
      subject: 'Reset Password',
      text: 'Click the link below to reset your password',
      html: `<a href='http://localhost:3000/reset/${token}'  >reset password link</a>`

    }
    res.status(200).json({
      success: true,
      message: 'check your mail box to reset password'
    })
    next()


  },


  resetpassword: async (req, res) => {

    const { password, confirm } = req.body
    const { error } = ValidateResetPasswordData(req.body)

    if (error) {
      return res.status(422).json({
        message: 'validation error',
        errors: error,
        success: false
      })
    }

    if (password !== confirm) {
      return res.status(422).json({
        message: 'validation error',
        errors: {
          details: [
            {
              path: ['confirm'], message: 'password does not match'
            }
          ]
        },
        success: false
      })
    }

    const passwordhash = await bcrypt.hash(password, 10)
    userModel.findByIdAndUpdate({ _id: req.user.id }, { password: passwordhash }, (err, user) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: 'error updating password',
          errors: err
        })
      }
       else {
        res.status(200).json({
          success: true,
          message: 'password successffuly updated',
        })
      }
    })
  },
  //Sort user By ratting Top Users
topUser: function (req, res, next) {

  userModel.find({}).sort({ratting:-1}).exec((err, user) => {
    if (err) {
      res.json({ messsage: 'error', data: null, statut: 500 })
    }
    else {
      res.json({ messsage: 'user application by id in BD', data: user, statut: 200 })
    }

    
  }) 
} 
//End Anas functions
}










