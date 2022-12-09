
const annonceModel = require('../models/annoncesModel');

module.exports = {

    createAnnonce: function (req, res) {

                annonceModel.create(req.body, (err, annonce) => {

                    if (err) {
                        res.json({
                            message: "error created annonce" + err,
                            data: null,
                            status: 500,
                            errors: err
                        });

                    } else {
                        res.json({
                            message: "seccuss created annonce",
                            data: annonce,
                            status: 200,
                        });
                    }
                });
      
    },

    getAnnonceById: function (req, res) {

        annonceModel.findById({ _id: req.params.id }).populate('userId').populate('categorie').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'annonce',
                    success: true,
                    data: data
                })
        })
    },

    getAllAnnonce: function (req, res) {

        annonceModel.find({}).populate('userId').populate('categorie').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'annonces',
                    success: true,
                    data: data
                })
        })
    },


    deleteAnnonce: function (req, res) {

        annonceModel.findByIdAndDelete({ _id: req.params.id }, function (err, annonce) {

            if (err) {
                res.json({
                    message: "error deleted annonce" + err,
                    data: null,
                    status: 500,
                });
            } else {
                res.json({
                    message: "seccuss delted annonce",
                    data: annonce,
                    status: 200,
                });
            }
        }

        )
    },

    updateAnnonce: function (req, res) {

        annonceModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, annonce) {

            if (err) {

                res.json({ message: 'error update annonce' + err, data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update annonce', data: annonce, status: 200 })
            }
        }

        )
    },

    getAnnonceByUserId: function (req, res) {
        annonceModel
          .find({ user: req.params.id })
          .populate("userId")
          .exec((err, annonce) => {
            if (err) {
              res.json({
                message: "error get  annonce" + err,
                data: null,
                status: 500,
              });
            } else {
              res.json({
                message: "seccuss get annonce by iddddd",
                data: annonce,
                status: 200,
              });
            }
          });
      },






    // getAnnonceByUserId: function (req, res) {
    //     annonceModel
    //       .find({ user: req.params.id })
    //       .populate("userId")
    //       .exec((err, annonce) => {
    //         if (err) {
    //           res.json({
    //             message: "error get  annonce" + err,
    //             data: null,
    //             status: 500,
    //           });
    //         } else {
    //           res.json({
    //             message: "seccuss get annonce by iddddd",
    //             data: annonce,
    //             status: 200,
    //           });
    //         }
    //       });
    //   },


      Searchannonce: (req,res)=> {
 
        console.log(req.query.keyword);
    
        const {keyword } = req.query
    
        annonceModel.find( req.params.keyword !== '' ? {
            $or: [{ categorie: { $regex: keyword, $options: 'i' } },
            {emplacement: { $regex: keyword, $options: 'i' } } ,
                {groupe_sanguin: { $regex: keyword, $options: 'i' } } ,
    
            ]
        } : {})
        
        .then(annonces => {
    
            res.status(200).json({
                message: 'all annonces found',
                data: annonces
            })
        })
        .catch( err => {
    
            res.status(500).json({
                message: err,
                status: 500
            })
        })
    
    }
    
    
    

}