const p=new Promise((resolve,reject)=>{
    // kick of some async works
    //
   
    setTimeout(() => {
        resolve(1)  //pending =>resolve,fullfilled
            reject (new Error('messege')); //pending => rejected

    }, 200);
})
p
.then(result=>console.log('result',result))
.catch(err=>console.log('Error',err.messege))