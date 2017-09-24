var express = require('express');
var path = require('path');

var app = express();

app.set('port',( process.env.PORT || 5000 ))

app.use(express.static(__dirname +'/dist'));


app.get('/*',function(req,res){
    res.sendFile('index.html', { root: __dirname });
})


app.listen(app.get('port') ,function(){
    console.log('server is running at '+ app.get('port'));
})
