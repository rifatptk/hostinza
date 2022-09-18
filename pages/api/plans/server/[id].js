import dbConnect from "../../../../utils/mongo";
import VM from "../../../../model/VM";


export default async function   handler( req, res) {
    const { method,  query:{id} } = req
    dbConnect()
    
    if(method === "GET"){
       try {
        const server = await VM.findById(id)
        res.status(200).json(server)
       } catch (error) {
         res.status(500).json(error.message)
       }
    }

}