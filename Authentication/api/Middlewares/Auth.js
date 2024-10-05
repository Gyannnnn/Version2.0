const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const ensureAuthenticated = (req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403)
        .json({message:"Unauthorised , jwt Required"});
    }
    try {
        const decoded = jwt.verify(auth,JWT_SECRET);
        req.user = decoded;
        next();
        
    } catch (error) {
        return res.status(401)
        .json({message:"Unauthorised , jwt Required"});
        
    }
}


module.exports = ensureAuthenticated;