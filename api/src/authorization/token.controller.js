const { verifyRefreshToken } = require("./tokenService");

module.exports= function tokenController(req,res){
    const refreshToken=req.body.token;
    if(refreshToken==null) return res.sendStatus(401);
    const response=verifyRefreshToken(refreshToken);
    if(( response).status==="unsuccessful"){
        res.sendStatus(403);
        console.log("Unsuccessful")
    }
    if(( response).status==="success"){
        res.json(( response).data);
        console.log("Successful")
    }
}
