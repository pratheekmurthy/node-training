const express = require('express')
const app =express()
const configureDB = require('./config/database')
const router =require('./config/routes')
const port = 3058


//setup db
configureDB()



//to enable our express to handle json requests
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log('server is running on port ', port)
})