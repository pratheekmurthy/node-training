const express = require('express')   //import express
const app = express()                 
const port = 3010 

//Middleware

app.use(express.json())

const users =[
    { id : 1 , name : 'pratheek' , role : 'software engineer' },
    { id : 2 , name : 'Aditya' , role : 'software engineer' },
    { id : 3 , name : 'selvam' , role : 'sr.software engineer' }
]

const products = [
    { id :1,name:"Benz",department : "automobiles"},
    { id :1,name:"Coffee",department : "beverages"},
    { id :1,name:"pen",department : "stationaries"}
]

app.get('/',(req,res)=>{
    res.send("welcome to our page")
})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})

app.get('/users',(req,res)=>{
    res.json(users) // or we can send res.json(users)
})

// To get particular user record
app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    const user = users.filter((user)=>{
        return user.id === Number(id)
    })
    if(user){
        res.json(user)
    }else {
        res.json({})
    }  

})





//To get particular data from name
app.get('/users/name/:name',(req,res)=>{
    const name = req.params.name
    const user = users.filter((user)=>{
        return user.name === name
    })
    if(user){
        res.json(user)
    }else {
        res.json({})
    }  

})

// To get all the products
app.get('/products',(req,res)=>{
 res.json(products)
})

// Handle get ,post ,delete methods
app.get("/api/students",(req,res)=>{
    res.json({
        message :`method -${req.method} ,url - ${req.url}`
    })
})

app.post("/api/students", (req,res)=>{
    const data = req.body
    console.log(data);
    res.json({
        message :`method ${req.body.name} method ${JSON.stringify(data)} `
    })
})

app.put("/api/students/:id", (req,res)=>{
    const id  = req.params.id
    const body = req.body
    console.log(`id - ${id} , body -${JSON.stringify(body)}`);
    res.json({
        message :`method ${req.method} url ${req.url} `
    })
})

app.delete("/api/students/:id", (req,res)=>{
    const id  = req.params.id
    // const body = req.body
    console.log(`id - ${id} `);
    res.json({
        message :`method ${req.method} url ${req.url} `
    })
})



app.listen(port,()=>{
    console.log('listening on port ',port)
})