import dbConnect from "../../../utils/mongo";
import OrderList from "../../../model/OrderList";


export default async function handler(req, res) {
    const {method} = req
    dbConnect()


    if(method === "POST"){
        
        try {
            const order = await  new OrderList(req.body)
           const newOrder = await order.save();
            res.status(201).json(newOrder)
        } catch (error) {
            res.status(500).json(error.message)
        }

    }



}