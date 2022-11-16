const getQuery = require("../../models/query/getQuery");
const queryUsingSequelize = require("../../models/sequelize.model");
const searchQuery=queryUsingSequelize.users;

module.exports = async function loginQuery(emailId, password) {
  // const text='SELECT uid,name FROM users WHERE email=$1 AND password=$2';
  // const values=[emailId,password];
  // return loginObj=getQuery(text,values);
  const searchResult = await searchQuery.findOne({
    where: {
      email: emailId,
      password:password,
    },
    attributes: ["uid", "name"],
  });
  return searchResult;
};
