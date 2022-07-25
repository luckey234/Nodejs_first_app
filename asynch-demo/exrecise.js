const { reject } = require("underscore");

// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });
//   convert simple to promise async await

async function notifycustomer(){
    const customer = await getCustomer(1)
    console.log('Customer: ', customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top movies: ', movies);
    const email=await sendEmail(customer.email,movies)
    console.log('Email sent successfully... ✔ 😍')
    }
}


notifycustomer();

function getCustomer(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Luckey Pandey', 
              isGold: true, 
              email: 'pandeyji7705@gmail.com' 
            });
          }, 4000); 
    })
    
  }
  
  function getTopMovies() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['SAW', 'ATTACK']);
          }, 4000);
    })

  }
  
  function sendEmail(email, movies) {
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve();
      }, 4000);
  })
  }