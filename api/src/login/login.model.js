const getQuery = require('../../models/query/getQuery');
module.exports=function loginQuery(emailId,password){
    const text='SELECT uid,name FROM users WHERE email=$1 AND password=$2';
    const values=[emailId,password];
    return loginObj=getQuery(text,values);
}