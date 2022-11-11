const client=require('../dbConnect');

module.exports=function selectQuery(text,values){
    
    client.query(text,values,(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log("Success");
        console.log(res.rows);
    }
});
}



