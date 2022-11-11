// const bcrypt = require('bcrypt');
// const hash = "$2b$10$XAhoBrvZLd49q1ZSWhC/xuyMdEy9JsNfYIVldR2swYcfLVU7ALMSa"
// const newText = "HelloWorld"; 

// console.log('password match : ' , bcrypt.comparesync(newText, hash)); 

// const myObj=[{password:"123"},{fileid:1}];

// let obj=myObj.find(item=>item.password==="123");
// console.log(obj.password)

// const express=require('express');
// const router=express.Router();
// //const downloadQuery=require('../../../models/query/downloadQuery.js')
// router.use(express.json());
// const client=require('../../../models/dbConnect');
// router.use(express.urlencoded({extended:true}))
// router.use(express.json());
// router.route("/:id").get(handleDownload).post(handleDownload);
// function  handleDownload(req, res) {
    
//     const id=req.params.id;
//     //downloadQuery(id);
//     const text='SELECT path,fname,password FROM files WHERE fileid=$1';
//     const values=[id];
//     client.query(text, values, (err, result) => { //await since it is a db call
//         if (err) {
//             console.log("invalid");
//         } else {
//             //console.log(result.rows);
//             const object = result.rows.find(item => item.password);
//             //console.log(object);
//             var password = object.password;
//             var path = object.path;
//             var fileName = object.fname;
//             //console.log(password);
//         }
//         if (password != null) {
//             console.log("passwor is not null");
//             if (req.body.password == null) {
//                 console.log(req.body.password);
//                 res.render("password");
//                 return;
//             }
//             if
//                 ((req.body.password != password)) {
//                 console.log(req.body.password);
//                 res.render("password");
//                 return;
//             }

//         }
    
//             res.download(path, fileName);
        
//     });
    

    
    
// }
  
    
  
// module.exports=router;


//Executor
const client = require("../../../api/models/dbConnect");

function executor(query = "", params = [], resultCallback) {
  return new Promise((res, rej) => {
    client.query(query, params, (err, result) => {
      if (err) rej(err);
      if(resultCallback) res(resultCallback(result)); 
      res(result);
    });
  });
  console.log(res);
}

module.exports=executor; 