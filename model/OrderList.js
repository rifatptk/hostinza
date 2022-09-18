import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    start_date :{
        type: Date,
        default : Date.now,
        immutable: true, 
    },
    ordered_date :{
        type: Date,
        default : Date.now,
    },
    billing_address :{
        type:Number,
        title : "Billing address",

    },
    status :{
        type: [String],
        title: "Status",
        enum :[ "Initiated", "Payment Failed", "Payment Received", "Processing", "Completed"]

    },
    order_notes : String,
    
    vat_amount : {
        type:Number,
        title: "Vat amount",     
    },
    raw_amount :{
        type:Number,
        title: "Raw amount",
    },
    total_amount :{
        type:Number,
        title: "Total amount",
    },
    coupon :Number,
    items :{
        type: String,
        title: "Items",
        immutable: true,
    },
    created_at :{
        type:Date,
        default :Date.now,
        immutable:true
    },
    updated_at :{
        type:Date,
        default :Date.now,
        immutable: true
    }

})


export default mongoose.models.OrderList || mongoose.model("OrderList", OrderSchema)