//const {Sequelize}=require('sequelize');
const {DataTypes, Sequelize}=require('sequelize');

const sequelize=new Sequelize('File_Sharing','postgres','admin',{
    host:'localhost',
    dialect:'postgres',
    logging: console.log, 
    define:{
        timestamps: false
    }
});

// }
function connectSequlizePostgres(){
sequelize.authenticate().then(()=>console.log('Sequlize estlablished')).catch(err=>console.log(`Error ${err}`));
return sequelize;
}
const postgresClient=connectSequlizePostgres();
//console.log(postgresClient)
module.exports={sequelize, postgresClient}


