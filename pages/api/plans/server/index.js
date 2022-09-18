import dbConnect from "../../../../utils/mongo";
import VM from "../../../../model/VM";


export default async function   handler( req, res) {
    const { method } = req
    dbConnect()
    
    if(method === "GET"){
       try {
        const servers = await VM.find()
        res.status(200).json(servers)
       } catch (error) {
         res.status(500).json(error.message)
       }
    }

}