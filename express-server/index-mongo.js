const express = require('express')   //import express
const mongoose = require('mongoose')
const app = express()                 
const port = 3055

//configuration for data incoming
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/feb2020')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('error in connecting db',err )
    })

app.get('/',(req,res)=>{
    res.send("welcome to our page")
})


app.listen(port,()=>{
    console.log('server is running on port ',port)
})