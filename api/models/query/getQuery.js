const client = require("../dbConnect");

function downloadQuery(text,values,resultCallback) {
  return new Promise((res, rej) => {
    client.query(text, values, (err, result) => {
      if (err) rej(err);
      if(resultCallback) res(resultCallback(result)); 
      res(result);
    });
  });
}

module.exports=downloadQuery; 