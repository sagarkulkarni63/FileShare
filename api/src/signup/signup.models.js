const signupQuery=require('../../models/query/signupQuery');
const insertUserUsingSequelize=require('../../models/sequelize.query');

module.exports=function signupModel(newId,user,email,password){
    try{
        const insertedUser=insertUserUsingSequelize(newId,user,email,password);
        insertedUser.then(console.log("Data Inserted"))
    }catch(error){
        console.log(error);
    }
    

    // const text='INSERT INTO users(uid,name,email,password) VALUES($1,$2,$3,$4)';
    // const VALUES=[newId,user,email,password];
    // signupQuery(text,VALUES);
}



