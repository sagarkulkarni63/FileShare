const {users}=require('./sequelize.model');

async function insertUserUsingSequelize(uid,name,email,password){
    const user=await users.create({uid:uid,name:name,email:email,password:password});
    console.log(user);
    return user;
}


module.exports=insertUserUsingSequelize