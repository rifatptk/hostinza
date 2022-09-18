import mongoose from "mongoose"

const DomainRegSchema = mongoose.Schema({
    domain :{
        type:String,
        maxLength: 255,
        minLength: 1,
        required:true
    },
    first_name:{
        type: String,
        maxLength:128,
        minLength:1,
        required: true,
    },
    last_name : {
        type: String,
        maxLength:128,
        minLength:1,
        required: true,
    },
    address_1 : {
        type:String,
        maxLength:255,
        minLength : 1,
        required: true
    },
    address_2:{
        type:String,
        maxLength:255,
        minLength : 1,
        required: true
    },
    state_province :{
        type:String,
        maxLength:255,
        minLength : 1,
        required: true
    },
    postal_code : {
        type:String,
        maxLength:255,
        minLength : 1,
        required: true
    },
    country :{
        type:String,
        maxLength:255,
        minLength : 1,
        required: true
    },
    phone :{
        type:String,
        maxLength:255,
        minLength : 1,
        required: true
    },
    email :{
        type:String,
        maxLength:255,
        minLength : 1,
        required: true
    },
    years :{
        type:Number,
        maximum :5,
        required: true
    },
    who_is_guard:{
        type:Boolean,
        default : false
    }
})



export default mongoose.models.DomainReg  || mongoose.model('DomainReg', DomainRegSchema)