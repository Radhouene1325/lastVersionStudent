const feedbackModel = require('../models/feedBackModel');


module.exports = {

    makeFeedBack: (req, res) => {

        // récuperation de data
        const data = {
            user: req.params.id,
            toUser: req.body.toUser,
            text: req.body.text,
            ratting: req.params.rate,
        }

        console.log(data);
        const t = new feedbackModel(data)
        t.save().then(t => t.populate('user', 'name')
            .then(feedback => {
                res.status(200).json({
                    message: 'feedback created',
                    data: feedback
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'feedback not created ' + err,
                    data: null,
                })
            })
        )
    },

    deletefeedback: (req, res) => {
        feedbackModel.findByIdAndDelete({ _id: req.params.id }, (err, feedback) => {
            if (err) {
                res.status(500).json({
                    message: ' feedback not deleted'
                })
            } else {
                res.status(200).json({
                    message: ' feedback successfuly deleted',
                    data: feedback
                })
            }
        })
    },


    getById: function (req, res) {

        feedbackModel.findById({ _id: req.params.id }).exec((err, feedback) => {
            if (err) {
                res.json({ messsage: 'error', data: null, statut: 500 })
            }
            else {
                res.json({ messsage: 'user application by id in BD', data: feedback, statut: 200 })
            }
        })
    },

    //Récuperer les feedBacks sur cette personne
    getMyFeedBacks: function (req, res) {

        feedbackModel.find({ toUser: req.params.id }).exec((err, feedback) => {
            if (err) {
                res.json({ messsage: 'error', data: null, statut: 500 })
            }
            else {
                res.json({ messsage: 'user application by id in BD', data: feedback, statut: 200 })
            }
        })
    },
    //Récuperer les feedBacks envoyée par  cette personne
    getSentFeedBack: function (req, res) {

        feedbackModel.find({ user: req.params.id }).exec((err, feedback) => {
            if (err) {
                res.json({ messsage: 'error', data: null, statut: 500 })
            }
            else {
                res.json({ messsage: 'user application by id in BD', data: feedback, statut: 200 })
            }
        })
    },



    getAll: function (req, res, next) {

        feedbackModel.find({}).exec((err, feedback) => {
            if (err) {
                res.json({ messsage: 'error', data: null, statut: 500 })
            }
            else {
                res.json({ messsage: 'feedbacks application by id in BD', data: feedback, statut: 200 })
            }
        })

    },



    updatefeedback: (req, res) => {
        feedback.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true },

            (err, feedback) => {
                if (err) {
                    res.status(500).json({ message: "feedback not updated", data: null })

                } else {

                    res.status(200).json({ message: "feedback successfuly updated", data: feedback })
                }
            })
    },

    getOwnfeedbacks: (req, res) => {
        const { sub } = req.user

        feedback.find({ user: sub })
            .populate('user')
            .populate({ path: 'comments', populate: { path: 'user' } })
            .then(feedbacks => {
                res.status(200).json({
                    message: 'user feedbacks',
                    data: feedbacks
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'no user feedbacks',
                    data: null
                })
            })
    },

    RateUser: function (req, res) {

        rate = req.params.rate;
        //pour le moment
        evaluation = rate;
        user = userModel.findById({ _id: req.params.id });
        number = user.rattingNumber++;



        const rattingData = {
            ratting: 3,//evaluation, //req.params.rate,
            rattingNumber: 4, //rattingNumber, //number,
        };

        //Recuperation Id du perssone qui a voté
        userModel.findByIdAndUpdate({ _id: req.params.id }, { ratting: req.params.rate, rattingNumber: 4 }, function (err, user) {

            if (err) {
                res.json({ messsage: 'error ', data: null, statut: 500 })
            }
            else {
                res.json({ messsage: 'user ratted successfuly', data: user, statut: 200 })
            }
        })
    },


}