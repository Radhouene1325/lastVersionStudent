const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        
    },

    toUser: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        
    },

    text: {
        type: String,
        required: true
    },

    ratting: {
        type: Number,
        required: false
    },

    hasRatted:{
        type: Boolean,
        default:false,
    }
}, { timestamps: true })

module.exports = new mongoose.model('feedback', feedbackSchema)