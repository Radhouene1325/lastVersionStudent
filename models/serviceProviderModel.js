
const mongoose=require('mongoose')
const userModel=require ('./userModel')

const serviceProviderSchema = new mongoose.Schema({

NumCarteEtudiant:{

    type:Number,
    required:true
    
},

// imageCarteEtudiant:{
//     type:String,
//     required:true
// }


},{ timestamps: true })
    
module.exports=userModel.discriminator('serviceProvider',serviceProviderSchema);
