const startDebugger=require('debug')('app:startup');
const dbDebugger =require('debug')('app:db')
const morgan = require('morgan')
const express=require('express')
const home =require('./views/routes/home')
const app=express()
app.set('view engine','pug')
app.set('views','./views')


if(app.get('env')=='development'){
    app.use(morgan('tiny'));
    startDebugger('morgan enabled');
}
app.use('/',home)
//dbwork
dbDebugger('connected to the database....')
const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listenning port ${port}..`);
})

