const mongoose = require('mongoose')
const mongoosePaginate = require ('mongoose-paginate')
const CustomersSchema = new mongoose.Schema({

    budget:{type:String},
    pictures:{type:Array},
    age:{type:Number},
    name:{type:Object},
    company:{type:String},
    email:{type:String},
    phone:{type:String},
    address:{type:String},
    about:{type:String},
    registered:{type:String},
    latitude:{type:String},
    longitude:{type:String},
    contactTimeline:{type:Array},
    channel:{type:String},
    createdAt:{
        type :Date,
        default:Date.now
    },
})

CustomersSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Customers',CustomersSchema)


