
const serviceModel = require('../models/serviceProviderModel')
const bcrypt=require('bcrypt');
const {  serviceProviderValidation } = require('../validation/userValidation');

module.exports = {

    register: async (req, res) => {

      const { email, password } = req.body;
      const { error } = serviceProviderValidation(req.body);

      if (error)
      return res.status(422).json({
          success: false,
          errors: error,
          message: 'user data validation error'
      })
  
      else {
  
       serviceModel.findOne({ email }, function (err, user) {
  
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

         serviceModel.create(req.body, function (err,user) {

                        if (err)
                            return res.status(500).json({ msg: err.message, error: true })
                        else {
                            return res.status(200).json({ isAuthenticated: true, user: { email,role:user.__t}, error: false })
                        }
    
        })
      }
    })
  }       
    
     },

    
  getAllService: function (req, res,next){
  
    serviceModel.find({}).populate('annonce').exec ((err, user)=> {
      if (err) {
        res.json({ messsage: 'error', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: ' all service in BD', data: user, statut: 200 })
      }
    })

 },
  

  getServiceById: function (req, res) {

    serviceModel.findById({ _id: req.params.id }).populate('annonce').exec ((err, user)=> {
      if (err) {
        res.json({ messsage: 'error', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'user application by id in BD', data: user, statut: 200 })
      }
    })
  },



  deleteServiceById: function (req, res) {
    serviceModel.findByIdAndDelete({ _id: req.params.id }, function (err, user) {
      if (err) {
        res.json({ messsage: 'error', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'service provider deleted successfuly', data: user, statut: 200 })
      }
    })
  },


  updateServiceById: async function (req, res) {


    serviceModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, user) {
      
      if (err) {
        res.json({ messsage: 'error ', data: null, statut: 500 })
      }
      else {
        res.json({ messsage: 'service updated successfuly', data: user, statut: 200 })
      }
    })
  },



}
