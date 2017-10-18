var express = require('express');
var PORT = process.env.port | 3000;

var app = express();

app.get('/',function(req,res){
    res.status(200).send("<h1>Watching you</h1>")
})

app.listen(PORT,function(){
    console.log("Server running on port "+PORT);
})