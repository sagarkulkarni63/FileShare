const signupQuery=require('../../models/query/signupQuery');
module.exports=function signupModel(newId,user,email,password){
    const text='INSERT INTO users(uid,name,email,password) VALUES($1,$2,$3,$4)';
    const VALUES=[newId,user,email,password];
    signupQuery(text,VALUES);
}


// const {Sequelize}=require('sequelize');
// const sequelize=new Sequelize('File_Sharing','postgres','admin',{
//     host:'localhost',
//     dialect:'postgres',

// });
//sequelize.authenticate().then(()=>console.log('Sequlize estlablished')).catch(err=>console.log(`Error ${err}`));
