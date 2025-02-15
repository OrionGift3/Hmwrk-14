const {default:mongoose, } = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:String,
    email:{type:String,lowercase:true},
    password:String,

    expenses:{type:[mongoose.Schema.Types.ObjectId],ref:'expense',default:[]}

})

module.exports = mongoose.model('user',userSchema)