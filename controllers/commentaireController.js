const commentaireModel = require('../models/commentaireModel.js');
const Comment = require('../models/commentaireModel.js');
const Post = require('../models/postModel.js')
const Insidecmt = require('../models/inside.comment.js')

module.exports = {

    create: async (req, res) => {


        const data = {
            user: req.body.user,
            text: req.body.text
        }

        const comment = new Comment(data)

        comment.save().then(com => {
            Post.findByIdAndUpdate({ _id: req.body.post }, { $push: { comments: com._id } }, { new: true })
                .populate('user')
                .populate({ path: 'comments', populate: { path: 'user' } }).populate({ path: 'insidecom' })
                .then(post => {
                    res.status(200).json({ message: 'comments added to post', data: post })
                })
                .catch(err => {
                    res.status(500).json({ message: 'comment not added to post', data: null })
                })
        }
        )

    },


/********** repondre pour un commentaire****************************** */
    repondre: async (req, res) => {

        console.log(req.body.comment)
        const data = {
            user: req.body.user,
            text: req.body.text
            /**********push id de commentaire */
        }


        const insd = new Insidecmt(data)

        insd.save().then(com => {
            Comment.findByIdAndUpdate({ _id: req.body.comment }, { $push: { insidecom: com._id } }, { new: true })
                .populate('user')
                .populate({ path: 'insidecom', populate: { path: 'user' } })
                .then(comment => {
                    res.status(200).json({ message: 'comments added to comment', data: comment })
                })
                .catch(err => {
                    res.status(500).json({ message: 'comment not added to post', data: null })
                })
        }
        )


    },
/***************end*************** */




    getAllCommentaire: async (req, res) => {
        commentaireModel.find({}).populate('user')
            .populate({ path: 'insidecom', populate: { path: 'user' } })
            .then(AllComment => {
              
                res.status(200).json({ message: "'error get all Commentaire'", data: AllComment })
            }).catch(err => {
                res.status(500).json({ message: "error get all Commentaire", data: null })
            })

        // if (err) {

        //     res.json({ message: 'error get all Commentaire' + err, data: null, status: 500 })
        // } else {

        //     res.json({ message: 'all Commentaire in system', data: Commentaire, status: 200 })

        // }

    },


    getCommentaireById: function (req, res) {

        
        commentaireModel.findById({ _id: req.params.id })

            .populate({ path: 'insidecom', populate: { path: 'user' } })
            .then(idComnt => {
                const user = {
                    data: idComnt.insidecom,
                    idcmt: idComnt.id,
                    textComt:idComnt.text,
                    iduser:idComnt.user._id

                    // ,useravatar:idComnt.user.avatar

                }
                res.json({ message: 'one Commentaire in system', data: user, status: 200 })
            }).catch(err => {
                res.json({ message: 'error get one Commentaire' + err, data: null, status: 500 })
            })

        // if (err) {

        //     res.json({ message: 'error get one Commentaire' + err, data: null, status: 500 })

        // } else {

        //     res.json({ message: 'one Commentaire in system', data: Commentaire, status: 200 })
        // }


    },

    deleteCommentaireById: function (req, res) {
        console.log(req.params.id)
        commentaireModel.findByIdAndRemove(req.params.id).populate('user').then(idComnt => {
            res.json({ message: 'one Commentaire in system', data: idComnt, status: 200 })
        })


            .catch(err => {
                res.json({ message: 'error get one Commentaire' + err, data: null, status: 500 })
            })



        // commentaireModel.findByIdAndDelete({ _id: req.params.id }).then(sup => {
        //     res.json({ message: 'one Commentaire delete system', data: sup, status: 200 })
        // }).catch(err => {
        //     res.json({ message: 'error delete  one Commentaire' + err, data: null, status: 500 })
        // })

        // if (err) {

        //     res.json({ message: 'error delete  one Commentaire' + err, data: null, status: 500 })
        // } else {
        //     res.json({ message: 'one Commentaire delete system', data: Commentaire, status: 200 })
        // }

    },



















    updateCommentaireById: function (req, res) {

        commentaireModel.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, Commentaire) => {
            if (err) {
                res.json({ message: 'error update  one Commentaire' + err, data: null, status: 500 })
            } else {
                res.json({ message: 'one Commentaire updated', data: Commentaire, status: 200 })
            }

        })

    },
    /**********************create Répondre commentaire {soucomments:com._id}*************************** */






}

