const client=require('../dbConnect');
module.exports=function signupQuery(text,VALUES){
client.query(text,VALUES,(err,res)=>{
    if(err){
        console.log(err.stack);
        //console.log("error");
    }
    else{
        //console.log(res.rows[1]);
        //console.log("success");
    }
});
}