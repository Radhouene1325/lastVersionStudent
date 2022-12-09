
const mongoose = require('mongoose')

const commentaireSchema = new mongoose.Schema({


    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    text: {
        type: String,
        required: true
    },
    insidecom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "inside",
        }
    ],

}
    , { timestamps: true })


module.exports = new mongoose.model('comment', commentaireSchema)
