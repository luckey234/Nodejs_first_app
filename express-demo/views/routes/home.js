const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index',{title:'my express app',messege:'Hello node'})
    })
    module.exports=router