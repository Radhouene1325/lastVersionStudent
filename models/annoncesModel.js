const mongoose = require("mongoose");

const annoncesSchema = new mongoose.Schema(

    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",

        },

        categories: {

            type: String,
            enum: ["Aides personnes agé ", "Services", "IT", "Restauration/Hotellerie"],
            required: true

            // type: mongoose.Schema.Types.ObjectId,
            // ref: "categorie",

        },


        categorie: {

        
             type: mongoose.Schema.Types.ObjectId,
             ref: "categorie",

        },

        title: {
            type: String,
            required: true
        },

        jobType: {
            type: String,
            enum: ["à plein temps", "à temps partiel", "travail à domicile"],
            required: true
        },
        duration: {
           
            type:String,
            default:Date.now()
        
            // type: Number,
            // required: true
        },

        Salary: {
            type: Number,
            integer: true,
            required: true
        },



        description: {
            type: String,
            required: true

        },

      

        ASSIGNED: {

            type: Boolean,
            default: false,
            required: true
        },

        Not_ASSIGNED: {

            type: Boolean,
            default: false,
            required: true
        },
        CLOSED: {

            type: Boolean,
            default: false,
            required: true
        },

        REJECTED: {

            type: Boolean,
            default: false,
            required: true
        },
    },
    { timestamps: true } //date de creation w update de annoces
);

module.exports = mongoose.model("annonces", annoncesSchema);