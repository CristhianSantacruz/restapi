
const jwt = require('jsonwebtoken')


const authenticateToken = (req,rest,next) => {
    const authHeader = req.headers['token'];
    const token = authHeader
    console.log(token)

    if(token == null) return rest.sendStatus(401)

    jwt.verify(token,process.env.TOKEN_SECRET,(err,user) => {
        if(err) return rest.sendStatus(408);
        req.user = user;
        next();
    });
}


module.exports = authenticateToken;