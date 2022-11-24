const getUserFromT=require('../../utils/getUserFromToken')
const getUserFromToken=getUserFromT.getUserFromToken;
const homepageServices=require('./homepage.services');
const filesUploadedByUser=homepageServices.getFilesUploadedByUser;


module.exports= async function getFileLinkByUser(req,res){
    const authHeader=req.headers['authorization']
    const token=authHeader&&authHeader.split(' ')[1]
    if(!token) return res.sendStatus(401);
    const loggedInUser= getUserFromToken(token);
    const uid=loggedInUser.data.uid;
    const data=await filesUploadedByUser(uid);
    console.log(data);
    if(data.length===0){
        res.send("No file uploaded By You")
    }
    else{
    res.send(data)
    }
}