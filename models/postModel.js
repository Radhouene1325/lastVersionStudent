const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

    text: {
        type: String,
        required: false
    },
    image: {
        type: String
    },

    // likes: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "user",
    //     }
    // ],
    likes: {
        type: Array,
        default: [],
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",



        },


    ],

    // soucomments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "comment",
    //     }
    // ],

}, { timestamps: true })

module.exports = new mongoose.model('post', postSchema)