const mongoose = require('mongoose')

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


module.exports = Task