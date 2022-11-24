const filesUploadedByUserId=require('./homepage.models');

async function getFilesUploadedByUser(uid){
    const filesUploadedByUser=await filesUploadedByUserId(uid);
    return filesUploadedByUser;
}


module.exports={getFilesUploadedByUser}