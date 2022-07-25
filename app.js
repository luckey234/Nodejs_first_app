// var logger=require('./logger')
// logger.log('kkkk')
//directory system
// console.log(__filename);
// console.log(__dirname);
// const path =require ('path');
// var pathObj = path.parse(__filename)
// console.log('path object ',pathObj);
//operating system
// const os =require ('os')
// var totalememory = os.totalmem()
// var freemam = os.freemem()
// console.log(totalememory);
// console.log(freemam);
//recent project files path

// const fs = require('fs');
// const files =fs.readdirSync('./')
// console.log(files);
// fs.readdir('./',function(err,files){
//     if(err) console.log('Eroor',err);
//     else console.log('Result',files)
// })

//event emitter class

// const EventEmitter =require('events');


//Raise events 
// emitter.emit('messegeLogged',{id:1,url:'http://'})
// emitter.console
// const os =require ('os')
// console.log(os);
// const Logger =require('./logger');
// const logger=new Logger();
// logger.on('messegelogged',(arg)=>{
//     console.log('listner called',arg);
// })
// logger.log('messese')

//read official node documentation for brief intro.....

//server....brief for read documentation-->new.net.server
const http=require('http')
const server=http.createServer((req,res)=>{
if(req.url==='/'){
res.write('helllo JohnCena')
res.end()
}
if(req.url==='/api/courses'){
    res.write(JSON.stringify(['satish','upendra','luckey','ravindra','raj']))
    res.end()
}
if(req.url==='/api/courses/luckey'){
    res.write(JSON.stringify(['Angular','Nodejs']))
    res.end()
}
if(req.url==='/api/courses/raj'){
    res.write(JSON.stringify(['Angular','Nodejs','desingner']))
    res.end()
}
})
// server.on('connection',(socket)=>{
//     console.log('new conection.....');
// })
server.listen(3000);
console.log('Listenning on port 3000....');

///now, know about node package manager visit its official website
//read documentation about npm for its documentation
//its freee bob ! happy!!
