import dbConnect from "../../../../utils/mongo";
import Apps from "../../../../model/Apps";


export default async function   handler( req, res) {
    const { method } = req
    dbConnect()
    
    if(method === "GET"){
       try {
        const apps = await Apps.find()
        res.status(200).json(apps)
       } catch (error) {
         res.status(500).json(error.message)
       }
    }



}