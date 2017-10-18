var express = require('express');
var PORT = process.env.port | 3000;

var app = express();


app.listen(PORT,function(){
    console.log("Server running on port "+PORT);
})