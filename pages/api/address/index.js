import dbConnect from "../../../utils/mongo";
import Address from "../../../model/Address" ;
import   verifyRole  from '../../../components/middleware/verifyRole'
import App from "next/app";



 async function  handler(req, res){
    const { method  } = req;
    dbConnect()
    const Role = req.userRole

    if(method === "GET"){
        if(Role.includes("admin_role")){

            try {
               const Alladdress  = await  Address.find()
               res.status(200).json(Alladdress)
   
            } catch (error) {
              
               res.status(500).json(error)
            }
        }else{
            res.status(400).json({
                success: false,
                message : "only admin can access this resource"
            })
        }
    }


    if(method === "POST"){
        try {
            const newAddress = await Address.create(req.body)
            res.status(201).json(newAddress)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default  verifyRole(handler)