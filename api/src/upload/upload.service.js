const {HOST_NAME}=require('../../config/config');
const uploadModels = require('./upload.models');


async function updatelink(originalName,path,password,fileId,link,uid){
    const modelResponse=await uploadModels(originalName,path,password,fileId,link,uid);
    return {status:"success",data:modelResponse}
}
function fileLink(fileId){
    const response= `${HOST_NAME}/file/${fileId}`;
    return response;
}



module.exports={updatelink, fileLink}