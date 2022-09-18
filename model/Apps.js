import mongoose from "mongoose";


const AppsSchema = new mongoose.Schema({
        plan: {   
            type: String,
            immutable : true
        },
        category: {
            type: String,
            immutable:true
        },
        tag: {
            type: [String],
            immutable:true
        },
        title: {
            type: String,
            maxLength : 250,
            minLength : 1,
            required : true
        },
        description: {
            type: String,
            minLength : 1,
            required : true
        },
        detailed_description: {
            type: String,
            minLength : 1,
            required : true
        },
        logo: {
            type: String,
            maxLength : 500,
            minLength : 1,
            required : true
        },
        note:  {
            type: String,
            minLength : 1,
            required : true
        },
        meta_name : {
            type: String,
            maxLength : 500,
            required : () => {
                return(
                    typeof this.meta_name ==="undeined" || (this.meta_name != null  &&  typeof this.meta_name != 'string')
                )
            }
        },
        meta_description : {
            type: String,
            maxLength : 500,
            required : () => {
                return(
                    typeof this.meta_description ==="undeined" || (this.meta_description !=null  &&  typeof this.meta_description != 'string')
                )
            }
        }

    }
);

export default  mongoose.models.Apps || mongoose.model("Apps", AppsSchema);