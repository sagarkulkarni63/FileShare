const queryUsingSequelize=require('../../models/file.sequelize');
const searchQuery=queryUsingSequelize.files;

module.exports=async function getUploadedFiles(uid){
    try{
        const searchResult=await searchQuery.findAll({
            where:{
                useruid:uid,
            },
            attributes:['fname','link']
        });
        return searchResult;
    }catch(error){
        console.log(error);
    }
}