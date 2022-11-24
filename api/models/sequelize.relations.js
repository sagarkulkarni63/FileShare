const fileObj=require('./file.sequelize');
const files=fileObj.files
const userObj=require('./user.sequelize')
const users=userObj.users



users.hasMany(files, {
  foreignKey: "useruid",
});

files.belongsTo(users,{foreignKey:'useruid'});
