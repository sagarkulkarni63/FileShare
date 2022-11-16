const {users,files}=require('./sequelize.model');


async function insertUserUsingSequelize(uid,name,email,password){
    const user=await users.create({uid:uid,name:name,email:email,password:password});
    //console.log(user);
    return user;
}

async function insertFileUsingSequelize(fname,path,password,fileid,link){
    const file=await files.create({fname,path,password,fileid,link});
    return file;
}


module.exports={insertUserUsingSequelize, insertFileUsingSequelize}