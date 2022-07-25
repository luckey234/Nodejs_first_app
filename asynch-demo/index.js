            //Asynchronous
                console.log('Before');
                getUser(1,(user)=>{
                console.log('User',user); 

                //get repositories....
                getRepositories(user.guthubUserName,(repos)=>{
                    // console.log("Repo",repos);
        //     getCommits(repos,(commit)=>{
        // //call-back hell
        //     })
                })
                })
                console.log('After');
            //synchronous version of same Code
            // console.log('Before');
            // const user=getUser(1)
            // const repos=getRepositories(user.guthubUserName)
            // const commit=getCommits(repos[0])
            // console.log('After');

        //  Async Await Approach
        async function displayfunction(){
           try{
            const aaa= await getRepositories(username,'hhhhh')
            console.log(aaa);
           }
      catch(err){
        console.log('Error',err);
      }
        }
    
            function getUser(id,callback){
                debugger
                setTimeout(() => {
                    console.log("Reading User From Database...");
                    callback({ id:id,guthubUserName:'Mosh'})
            
                return ;
            }, 2000);

            }
        function getRepositories(username,callback){
            setTimeout(() => {
                console.log('Calling Git Api....');
                callback(['repo1','repo2','repo3'])
            }, 2000);
        
        }

                //..................................//
                // thre way to deal asynchronous code
                // Async/await
                //promise
                //callback

        