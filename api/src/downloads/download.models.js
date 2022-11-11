const downloadQuery=require('../../models/query/getQuery.js')
module.exports=function downloadModelsQuery(id){
    const text='SELECT path,fname,password FROM files WHERE fileid=$1';
    const values=[id];
    const obj=downloadQuery(text,values);
    return obj;
}