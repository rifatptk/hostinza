import dbConnect  from "../../../utils/mongo";
import Address from "../../../model/Address";


export default async function   handler( req, res) {
 const { method,  query:{id} } = req
 dbConnect()


  if(method === "GET"){

    try {
        const address = await Address.findById(id);
        res.status(200).json(address) ;
    } catch (error) {
        res.status(500).json(error) ;
    }
  }
    
  if(method ==="PUT"){
  
     try {
        const address = await Address.findByIdAndUpdate(id, req.body, {new: true})
      res.status(200).json(address)
     } catch (error) {
        res.status(500).json(error.message)
     } 
  }
  if(method === "DELETE"){
    try {
        const address = await Address.findByIdAndDelete(id)
        res.status(200).json("address deleted successfully") 
    } catch (error) {
        res.status(500).json(error.message)
    }

  }

}