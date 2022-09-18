import dbConnect from "../../../utils/mongo";
import OrderList from "../../../model/OrderList";
import verifyRole from "../../../components/middleware/verifyRole";

async function handler(req, res) {
    const {method}= req
 await   dbConnect() ;
    const Role = req.userRole

    if(method === "GET"){
        if(Role.includes("admin_role")) {

            try {
               const orders = await OrderList.find()
               res.status(200).json(orders)
            } catch (error) {
                res.status(201).json(error.message)
            }
        }else{
            res.status(400).json({
                success: false,
                message : "only admin can access this resource"
            })
        }
    }

}

export default  verifyRole(handler)