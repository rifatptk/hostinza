import Keycloak from "keycloak-connect";
import Jwt  from "jsonwebtoken";


const verifyRole = ( handler ) =>{
    return async (req, res) =>{
      

        const token = req.body.token || req.query.token ||req.headers.token
      if(!token) {
        res.status(400).json({
            success : false,
            message : "token is required, kindly log In"
        })
      }else{
        const obj = Jwt.decode(token)
        req.userRole = obj.realm_access.roles
      }
     

        return handler(req, res);
   


       }
}

export default  verifyRole

// export const userId = (handler) =>{
//     return async (req, res) =>{
//          const userId = req.body.userId
//          if(userId){
//             req.user = users.find(user => user.id === userId)
//          }
//          return handler(req, res);
//     }
// }


