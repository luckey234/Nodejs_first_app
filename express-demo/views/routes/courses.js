const express =require('express')

const router=express.Router()

const courses=[
    {id:1,name:'course1'},
{id:2,name:'course2'},
{id:3,name:'course3'}
]
router.get('/',(req,res)=>{
        
    res.send(courses)
})
//get course by ID
router.get('/:id',(req,res)=>{  //here /api/courses place of replace with / for established routing 
    debugger
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send('the course for this given id is not present')
    res.send(course)
})
//.topic:49
//http handling post request


router.post('/', (req,res)=>{
    // router.post('/',async (req,res)=>{

    // try {
    //     const data =  await new Model({
    //         name: req.body.name,
    //         age: req.body.age
    //     })
    //     res.send(data)
    // } catch (error) {
    //     console.log(error);
    // }
    if( ! req.body.name || req.body.name.length<3){
//404 Bad Request()
res.status(404).send('Name is required   and should be a minimum 3 character')
return
    }
    // we can rigth like that but its complex like so,....use npm 
    //use --------::::::====> npm joi ,,commond:::===>>  npm i joi.
    // const schema={
//         name:Joi.string().min(3).required()
//     };
//     const result=Joi.validate(req.body,schema);
//     if(result.error){
// //404 Bad Request()
// res.status(404).send(result.error)
//         return
            // }//facing error in joi Validation
    // console.log(result);
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course)
    res.send(course)

   
})


//UPdate
router.put('//:id',(req,res)=>{
//look up the course 
// if not exists 404

//validate
// if invalid, return 

//update course
// retuirn the course according to requirement....
const course=courses.find(c=>c.id===parseInt(req.params.id))
if(!course) res.status(404).send('the course for this given id is not present')

course.name=req.body.name
res.send(course)
})
//Input validation-=====>..............................
//delete
router.delete('/:id',(req,res)=>{
    //look up the course 
    // if not exists 404

    //validate
    // if invalid, return 

    //update course
    // retuirn the course according to requirement....
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send('the course for this given id is not present')
    
let index = courses.indexOf(course)
courses.splice(index,1)
    res.send(course)
   })

   module.exports=router;