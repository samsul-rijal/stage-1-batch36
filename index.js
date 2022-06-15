const express = require('express')

const app = express()
const port = 8000

app.get('/', function(request, response){
    response.send("Hello World")
})

app.get('/user', function(request, response){
    response.send("Hallo user")
})

app.get('/contact', function(request, response){
    response.send("Form Contact")
})

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})