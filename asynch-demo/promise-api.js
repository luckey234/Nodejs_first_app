// const p=Promise.reject(('Reject for Rejection...'));
// p.catch(error=>console.log(error))

const p1=new Promise((resolve)=>{
setTimeout(() => {
    console.log('Async Operator......1')
    resolve(1)
}, 2000);
})
const p2=new Promise((resolve)=>{
    setTimeout(() => {
        console.log('Async Operator......2')
        resolve(2)
    }, 2000);
    });
    Promise.all([p1,p2])
    .then(result=>console.log(result))
    .catch(err=>console.log('Error ',err.messege))

