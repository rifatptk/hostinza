import mongoose from "mongoose";



const VMSchema = new mongoose.Schema({

    title: {
        type: String,
        maxLength : 250,
        minLength : 1
    },
    description: {
        type: String,
        minLength : 1
    },
    monthly_price: Number,
    logo: {
        type: String,
        maxLength : 500,
        minLength : 1
    },
    label: {
        type: String,
        immutable: true,
    },
    is_beta: Boolean,
    server_type: {
        type:String,
        immutable: true
    },
    server_size:[
        {
              title: String,
              description: String,
              monthly_price:Number,
              hourly_price: Number,
              cp: Number,
              memory: Number,
              storage: String,
              snapshot: Number,
              traffic: String,
              server_type:Number,
         }
    ],
    locations:[
        {

            zone: {
                type:Number,
                required:true,
                enum:["America", "Europe", "Australia", "Asia"]
            },
            country: {
                type: String,
                maxlength:250,
                minLength: 1,
                required:true,
            },
            city :{
                type:String,
                maxLength: 250,
                minLength: 1,
                required: true
            } ,
            logo: {
                type:String,
                maxLength: 500,
                minLength:1 ,
                required:true,
            }
        }
    ]

})


export default  mongoose.models.VM || mongoose.model("VM", VMSchema)