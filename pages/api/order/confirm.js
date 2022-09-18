import dbConnect from "../../../utils/mongo";
import DomainReg from "../../../model/DomainReg";
const axios = require('axios')

export default async function handler(req, res) {
    const {method}= req
    dbConnect() ;

    if(method === "POST"){
        try {
            
            const domainReg = await DomainReg.create(req.body)
           axios.post('https://api-host.disdicilo.it/api/domain.register', domainReg).then((resp)=>{
            console.log(resp)
            res.json(resp)
    
           }).catch(err =>{
             console.log(err)
             res.json(err)})
        } catch (error) {
            console.log(error)
            res.json(error)
        }
}
}