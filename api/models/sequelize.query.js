const fileObj=require('./file.sequelize');
const files=fileObj.files;
const userObj=require('./user.sequelize');
const users=userObj.users;


async function insertUserUsingSequelize(uid,name,email,password){
    const user=await users.create({uid:uid,name:name,email:email,password:password});
    //console.log(user);
    return user;
}

async function insertFileUsingSequelize(fname,path,password,fileid,link,useruid){
    const file=await files.create({fname,path,password,fileid,link,useruid});
    return file;
}


module.exports={insertUserUsingSequelize, insertFileUsingSequelize}