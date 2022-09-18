import dbConnect  from "../../../utils/mongo";
import OrderList from "../../../model/OrderList";


export default async function   handler( req, res) {
 const { method,  query:{id} } = req
 dbConnect()


  if(method === "GET"){

    try {
        const order = await OrderList.findById(id);
        res.status(200).json(order) ;
    } catch (error) {
        res.status(500).json(error) ;
    }
  }
    
 
}