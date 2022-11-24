const uploadQuery = require("../../models/query/uploadQuery");
const insertUsingSequelize = require("../../models/sequelize.query");
const insertFileUsingSequelize = insertUsingSequelize.insertFileUsingSequelize;

module.exports = async function uploadModels(
  originalName,
  path,
  password,
  fileId,
  link,
  uid,
) {
  // const text='INSERT INTO files(fname,path,password,fileid,link) VALUES($1,$2,$3,$4,$5)';
  // const values=[originalName,path,password,fileId,link];
  //uploadQuery(text,values);
  try {
    const insertedFile = await insertFileUsingSequelize(
      originalName,
      path,
      password,
      fileId,
      link,
      uid,
    );
    console.log("File Uploaded");
    //return { status: "uploaded" };
  } catch (error) {
    console.log(error);
    //return { status: "failure" };
  }
};
