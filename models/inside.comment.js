
const mongoose = require('mongoose')

const commentaireSchemaa = new mongoose.Schema({


    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    text: {
        type: String,
        required: true
    },
  

}
    , { timestamps: true })


module.exports = new mongoose.model('inside', commentaireSchemaa)
