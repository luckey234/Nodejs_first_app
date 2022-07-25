//using package
// var _ =require('underscore') 
// // core module......
// // var _ =require('./underscore') --> file redirection 
// //file or folder
// // node_modules 
// var result=_.contains([,2,3],2)
// console.log(result);




// about express
const express =require('express')
const app= express();

// app.get()
// app.post()
// app.put()
// app.delete()
app.get('/',(req,res)=>{
res,send('hello world')
})
app.listen(3000,()=>{
    console.log('listening port 3000');
})