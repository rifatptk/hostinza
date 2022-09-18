import mongoose from "mongoose";


const AddressSchema = mongoose.Schema({
    first_name : {
        type: String,
        title:"First name",
        maxLength: 150,
        minLength: 1,
        required: true,
    },
    last_name : {
        type: String,
        title:"Last name",
        maxLength: 150,
        null : true,
    },
    phone_number : {
        type: Number,
        title:"Phone number",
        maxLength: 15,
        minLength: 1,
        required: true,
    },
    address_line_1 : {
        type: String,
        title:"Address Line 1",
        maxLength: 150,
        minLength: 1,
        required: true,
    },
    address_line_2 : {
        type: String,
        title:"Address Line 2",
        maxLength: 150,
        null: true
    },
    country: {
        type: String,
        title:"Country",
        maxLength: 150,
        minLength: 1,
        required: true,
    },
    state : {
        type: String,
        title:"State",
        maxLength: 150,
        null: true,
    },
    city : {
        type: String,
        title:"City",
        maxLength: 150,
        minLength: 1,
        required: true,
    },
    zip_code : {
        type: String,
        title:"Zip code",
        maxLength: 7,
        required: true,
    },
    default :{
        type:Boolean,
        title: "Default"
    }

})



export default mongoose.models.Address ||  mongoose.model("Address", AddressSchema)