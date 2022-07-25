    const config=require('config')
    const express =require('express')
    const Joi = require('joi');//validation use
    const app= express();
    const Model = require('./public/post_SChema');
    const helmet=require('helmet')
    // const morgon=require('morgon')
    // const mongoose =   require('mongoose');
    const logger=require('./middleware/logger')

    const coursess=require('./views/routes/courses')
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app env:${app.get('env')}`);

if(app.get('env')=='development'){
console.log('kkkk');
}
    app.use(express.json()) // it will be use Json Body Property which is request.Json
    app.use(express.urlencoded({extended:true}));//x-wwww-form-urlencoded---->name and value post through that
    app.use(express.static('public'))

    //differente about custom middle_ware_function
    app.use(function(req,res,next){
        console.log('logging.....');
        next();
    }) 
    app.use(helmet())


    app.use('/api/courses',coursess)
//configuration...
// console.log('Application Name:'+config.get('name'));
// console.log('Application Name:'+config.get('mail.host'));





    // app.use(morgon('tiny'))
//     for storing data temper database
//     here express.json return piece of middleware..
//     app.get()
//     app.post()
//     app.put()
//     app.delete()

// mongoose.connect('mongodb://localhost:27017/test11',()=>{
//     try {
//         console.log('mongoose connected');
//     } catch (error) {
//         console.log(error);
//     }
// })
  


    app.get('/',(req,res)=>{
    res.send('hello world')
    })

    app.get('/api/course',(req,res)=>{
    res.send(['angular,node,react,mongo'])
    })
    app.get('/api/course/:id',(req,res)=>{
        res.send(req.params.id)
        })
    // for multiple request parameter
    app.get('/api/course/:data/:year/:month',(req,res)=>{
        res.send(req.params)
        })
    // port
    const port=process.env.PORT || 3000 || 4000
    app.listen(port,()=>{
        console.log(`listening port ${port}.....`);
    })
    // Query_Params
    app.get('/api/course/:data/:year/:month',(req,res)=>{
        res.send(req.query)
        })

        // topic 48
    // app.get('/api/courses',(req,res)=>{
    //     res.send(courses)
    // })
    //get all courses
  