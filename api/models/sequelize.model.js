const {DataTypes, Sequelize}=require('sequelize');
const {sequelize}=require('./sequelizeConnect')


    const users=sequelize.define('users',{
        uid:{
            type:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

    users.sync();

module.exports={users}

