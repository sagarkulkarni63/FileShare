const downloadModel=require('./download.models');

async function downloadFile(id,reqPassword){
    const file=await fileInfo(id);
    console.log(file);
    if(!file){
        return {status:"failure", msg:"NO SUCH FILE EXIST"}
    }
    const object=file.dataValues;
    console.log(object);
    const password=object.password;
    const path=object.path;
    const fileName=object.fname;
    if(password!=null){
        console.log("password is not null");
        if(reqPassword===null){
            console.log(reqPassword);
            //res.render("password");
            return{status:"Render",data:"password"};
        }
        if(reqPassword!==password){
            //res.render("password");
            return{status:"Render",data:"password"};
        }
    }
    //res.download(path, fileName);
    return{status:"download",data:path,fileName};
}

async function fileInfo(id){
    return downloadModel(id);
}


// obj.then(function (result){ const object = result.rows.find(item => item.password);
//     var password = object.password;
//     var path = object.path;
//     var fileName = object.fname;
//     if (password != null) {
//         console.log("passwor is not null");
//         if (req.body.password == null) {
//             console.log(req.body.password);
//             res.render("password");
//             return;
//         }
//         if
//             ((req.body.password != password)) {
//             console.log(req.body.password);
//             res.render("password");
//             return;
//         }
        
//     }
//     res.download(path, fileName);
    
// });



module.exports={downloadFile}