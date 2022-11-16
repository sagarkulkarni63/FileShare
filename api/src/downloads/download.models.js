const downloadQuery = require("../../models/query/getQuery.js");
const queryUsingSequelize = require("../../models/sequelize.model");
const searchQuery = queryUsingSequelize.files;

module.exports = async function downloadModelsQuery(id) {
  // const text='SELECT path,fname,password FROM files WHERE fileid=$1';
  // const values=[id];
  // const obj=downloadQuery(text,values);
  // return obj;
  const searchResult = await searchQuery.findOne({
    where: {
      fileid: id,
    },
    attributes: ["path", "fname", "password"],
  });
  return searchResult;
};
