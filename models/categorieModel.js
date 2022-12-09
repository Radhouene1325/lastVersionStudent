

const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema(

    {
       annonces:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "annonces",
        }],

        categorieNom: {
            type: String,
            required: true
        },
        
    }, {timestamps:true}

)



module.exports = mongoose.model("categorie", categorieSchema);