const downloadService=require('./download.services');
const client=require('../../models/dbConnect');
const downloadModelsQuery=require('./download.models');

async function  handleDownloadGet(req, res) {
    const id=req.params.id;
    if(!id){
        res.status(400).send("SEND CORRECT REQUEST ID")
    }
    const response=downloadService.downloadFile(id);
    if((await response).status==="failure"){
        res.status(400).send(( await response).msg);
    }
    else{
    res.render("password")
    }
}

async function handleDownloadPost(req,res){
    try{
    const id=req.params.id;
    const reqPassword=req.body.password;
    const response=downloadService.downloadFile(id,reqPassword);
    if((await response).status==="failure"){
        res.status(400).send(response.msg);
        throw new Error("Failure");
    }
    if( (await response).status==="Render"){
        res.render('password');
    }
    else if( (await response).status==="download"){
        console.log((await response).data)
        res.download( (await response).data)
    }
    }catch(error){
        console.log(error);
        return res.status(400).send(err.message);
    }
    
}



module.exports={handleDownloadGet,handleDownloadPost}