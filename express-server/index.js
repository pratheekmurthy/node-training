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

//create a mongo schema
const Schema = mongoose.Schema
const taskSchema = new Schema({
    title : {
        type : String,
        // required :true
        required :[true,"title is mandatory"]
    },
    description : {
        type : String,
        required :true
    },
    completed : {
        type : Boolean,
        required :true
    },
    dueDate :{
        type : Date,
        required :true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

//create a model
const Task = mongoose.model('Task',taskSchema)

//tasks api
app.get('/api/tasks', (req,res)=>{
    Task.find()
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err)
    })

})

//add a task to db
app.post('/api/tasks',(req,res)=>{
    const body = req.body
    const task = new Task(body)
    task.save()
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })

})

app.get('/api/tasks/:id',(req,res)=>{
    const id =req.params.id
    Task.findById(id)
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.put('/api/tasks/:id',(req,res)=>{
    const body = req.body
    const id =req.params.id
    
    Task.findByIdAndUpdate(id,body,{new : true, runValidators: true})
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })

})

app.delete('/api/tasks/:id',(req,res)=>{
    const id =req.params.id
    
    Task.findByIdAndDelete(id)
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })

})

app.get('/',(req,res)=>{
    res.send("welcome to our page")
})


app.listen(port,()=>{
    console.log('server is running on port ',port)
})