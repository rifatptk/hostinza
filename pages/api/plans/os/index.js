import dbConnect from "../../../../utils/mongo";
import OS from "../../../../model/OS";


export default async function   handler( req, res) {
    const { method } = req
    dbConnect()
    
    if(method === "GET"){
       try {
        const allOS = await OS.find()
        res.status(200).json(allOS)
       } catch (error) {
         res.status(500).json(error.message)
       }
    }



}