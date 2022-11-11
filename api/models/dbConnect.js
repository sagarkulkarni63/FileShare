const{Client}=require('pg');


const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"admin",
    database:"File_Sharing",
});

client.connect(()=>{
    console.log("DB Connected");
});

// client.connect();
// client.query(`Select * from users`,(err,result)=>{
//     if(!err){
//         console.log(result.rows);
//     }
//     client.end();
// });

module.exports=client;



