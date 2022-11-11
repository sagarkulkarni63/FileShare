const uploadQuery = require("../../models/query/uploadQuery");
module.exports=function uploadModels(originalName,path,password,fileId,link){
    const text='INSERT INTO files(fname,path,password,fileid,link) VALUES($1,$2,$3,$4,$5)';
    const values=[originalName,path,password,fileId,link];
    uploadQuery(text,values);
}