var express = require('express');
var path = require('path');
var app = express();

app.get('./components', function(req, res){
    res.sender('content');
});

app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000);