const {DataTypes, Sequelize}=require('sequelize');


module.exports=(sequelize)=>{
    const users=sequelize.define('users',{
        uid:{
            type:DataTypes.UUIDV4,
            allowNull:false,
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
    sequelize.sync();
}
