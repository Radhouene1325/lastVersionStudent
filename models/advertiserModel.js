
const mongoose=require('mongoose')
const userModel=require ('./userModel')

const advertiserSchema = new mongoose.Schema( {

},

{ timestamps:true }

)
    
module.exports=userModel.discriminator('advertiser',advertiserSchema);