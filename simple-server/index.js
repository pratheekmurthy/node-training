const http = require('http') // common js module loader
const port =3005

const users =[
    { id : '1' , name : 'pratheek' , role : 'software engineer' },
    { id : '2' , name : 'Aditya' , role : 'software engineer' }
]

const server = http.createServer((request,response)=>{
    if(request.url === "/"){
        response.end("welcome to our node js")
    }else if (request.url === '/about'){
        response.end("this is our about page")
    }else if (request.url === '/users'){
        response.end(JSON.stringify(users))
    }else if (request.url === '/pratheek'){
        response.end(JSON.stringify(users))
    }else {
        response.end("hey this is not a valid url")
    }
}) 

server.listen(port,()=>{
    console.log("server running on port",port)
})