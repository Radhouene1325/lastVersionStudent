
const CategorieModel = require('../models/categorieModel');

module.exports = {

    createCategorie: function (req, res) {

                CategorieModel.create(req.body, (err, Categorie) => {

                    if (err) {
                        res.json({
                            message: "error created Categorie" + err,
                            data: null,
                            status: 500,
                            errors: err
                        });

                    } else {
                        res.json({
                            message: "seccuss created Categorie",
                            data: Categorie,
                            status: 200,
                        });
                    }
                });     
    },


    getCategorieById: function (req, res) {

        CategorieModel.findById({ _id: req.params.id }).populate('annonces').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'Categorie',
                    success: true,
                    data: data
                })
        })
    },


    getAllCategorie: function (req, res) {

        CategorieModel.find({}).populate('annonces').exec((err, data) => {
            if (err)
                res.status(500).json
                    ({
                        success: false,
                        message: 'error' + err,
                        errors: err

                    })
            else
                res.status(200).json({
                    message: 'Categories',
                    success: true,
                    data: data
                })
        })
    },


    deleteCategorie: function (req, res) {

        CategorieModel.findByIdAndDelete({ _id: req.params.id }, function (err, Categorie) {

            if (err) {
                res.json({
                    message: "error deleted Categorie" + err,
                    data: null,
                    status: 500,
                });
            } else {
                res.json({
                    message: "seccuss delted Categorie",
                    data: Categorie,
                    status: 200,
                });
            }
        }

        )
    },

    updateCategorie: function (req, res) {

        CategorieModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, Categorie) {

            if (err) {

                res.json({ message: 'error update Categorie' + err, data: null, status: 500 })
            }
            else {

                res.json({ message: 'success update Categorie', data: Categorie, status: 200 })
            }
        }

        )
    },



}