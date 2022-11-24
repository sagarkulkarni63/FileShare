require('dotenv').config();
const express=require('express');
const app=express();
const path=require('path');
const ejs=require('ejs');
const PORT=3000;
const login=require('./api/src/login/login.route');
const signup=require('./api/src/signup/signup.route');
const client=require('./api/models/dbConnect');
const upload=require('./api/src/upload/upload.route.js');
const download=require('./api/src/downloads/download.route');
const token=require('./api/src/authorization/token');
const { nextTick } = require('process');
const postgresClient=require('./api/models/sequelizeConnect')
const homepage=require('./api/src/trialHomePage/homepage.route');
//const errorHandler=require('./api/middleware/errorHandleMiddleware');
//mport { v4 as uuidv4 } from 'uuid';


app.set('view engine',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.use('/file',download);
app.use('/upload',upload);
app.use('/login',login);
app.use('/signup',signup);
app.use('/token',token);
app.use('/homepage',homepage);
//app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});



// app.use((req,res,next)=>{
//     const error=new Error('Not found');
//     error.status=404;
//     next(error)
// })
// app.use((error,req,res,next)=>{
//     res.status(err.status||500);
//     res.json({
//         error:{
//             message: error.message
//         }
//     })
// })


