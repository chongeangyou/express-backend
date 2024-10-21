require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
//const asyncHandler = require('express-async-handler');
const courseRouter = require('./src/routes/course.js')
const bookRouter = require('./src/routes/book.js')
const userRouter = require('./src/routes/user.js')

const {handleError, logger} = require('./src/middlewares/index.js')
const dbConnect = require('./src/db/db.js')



dbConnect().catch((err) => {
    console.log("Error DB")
})

const app = express()



// const courses = [
//     {
//         id: '1',
//         title: 'HTML',
//         price: '12',
//         category: 'Code'
//     },
//     {
//         id: '2',
//         title: 'CSS',
//         price: '12',
//         category: 'Code'
//     },
//     {
//         id: '3',
//         title: 'JS',
//         price: '12',
//         category: 'Code'
//     }
// ]

app.use(bodyParser.json())
app.use(logger)

app.use('/books', bookRouter)
app.use('/courses', courseRouter)
app.use('/users', userRouter)





// app.get('/error', asyncHandler ((req, res) => {
//     getError()
// }))

// app.get('/courses/:id',checkData, (req, res) => {
//     const id = req.params.id
//     const course = courses.find((item) => {
//         return item.id == id
//     })
//     return res.json(course)
// })

// app.get('/courses', asyncHandler(function (req, res) {
//    // console.log(req.query)
//     return res.json(courses)
// }))

// app.post('/courses', (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// })

// app.post('/courses', (req, res) =>{
//     const addCourse  = {
//         id: req.body.id,
//         title: req.body.title,
//         price: req.body.price,
//         category: req.body.category
//     }
//     const exist = courses.some((item) =>{
//         return item.id == addCourse.id
//     })
//     if(exist){
//         return res.status(400).json('this course has already')
//     }
//     courses.push(addCourse)
//     return res.json({
//         operation: 'Success',
//         item: addCourse
//     })
// })

// app.patch('/courses/:id', (req, res) =>{

//    // console.log(req.params.id)
//     const parmId = req.params.id
//     const reqId = req.body.id
//     if(parmId == reqId){
//         const id = req.body.id 
//     const course = courses.find((item) => {
//         return item.id == id
//     })
//     if(course){
//         const index = courses.findIndex((item) =>{
//             return item == course
//         })
//        // course.id = req.body.id
//         course.title = req.body.title
//         course.price = req.body.price
//         course.category = req.body.category
//         console.log(course);
//         // course[index] = {
//         //     id: req.body.id,
//         //     title: req.body.title,
//         //     price: req.body.price,
//         //     category: req.body.category
//         // }
//        // console.log(courses[index])
//     }
//     return res.json({
//         operation: "Update Success",
//         item: courses
//     })
//     }else{
//         return res.status(404).json('Your update not found')
//     }

    
// })


// app.delete('/courses/:id', (req, res) =>{
//     const id = req.params.id
//     const course = courses.find((item) => {
//         return item.id == id
//     })
//     if (course){
//         const index = courses.findIndex((item) => {
//             return item == course
//         })
//         courses.splice(index, 1)
//         return res.json({
//             operation: 'delete',
//             item: courses
//          }
//         )
//     }

// })




// app.get('/', function(req, res){
//     res.send("Hello World")
// })
// app.get('/test', function(req, res){
//     res.send("Hello New World")
// })
// app.get('/short', (req, res) => {
//     res.status(200).send('Hello New World')
// })


app.use(handleError)
app.listen(3000, function(){
    console.log(`Server is running on port ${process.env.PORT}`)
})