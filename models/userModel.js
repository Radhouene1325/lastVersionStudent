const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    Genre: {
        type: String,
        // enum: ["Homme","Femme"],
        required: true
    },

    PhoneNumber: {
        type: String,
        required: true
    },

    PostalCode: {
        type: String,
        required: true
    },

    Street: {
        type: String,
        required: true
    },

    Country: {
        type: String,
        required: true
    },

    avatar: {
        type: String,

    },

    email: {

        type: String,
        unique: true,
        required: true
    },


    password: {
        type: String,
        required: true
    },

    ACTIVE: {

        type: Boolean,
        default: false,
        required: true
    },

    BLOCKED: {

        type: Boolean,
        default: false,
        required: true
    },

    WAITING_VALIDATION: {

        type: Boolean,
        default: false,
        required: true

    },

    isactive: {
        type: Boolean,
        default: false
    },
    ratting: {
        type: Number,
        default: 0,
        required: false,
    },
    rattingNumber: {
        type: Number,
        default: 0,
        required: false,
    },

}, { timestamps: true })

//Presave middleware - NOTE: if use arrow function, this becomes empty object, and we can't use isModified()
userSchema.pre("save", function (next) {
    //If there's no change to password field (no change, no add new), call next()
    if (!this.isModified('password')) {
        next()
    }

    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if (err)
            return next(err)
        this.password = hashedPassword;
        return next()
    })
})


//Custom method - if u wanna use 'this' as user document, don't use arrow function coz arrow function watch video 8 in my react document for more info

userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {

        if (err)
            return cb(err)
        if (!isMatch)
            return cb(null, false)
        return cb(null, this)
    })
}


module.exports = mongoose.model('user', userSchema)