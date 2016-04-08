var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverrride = require('method-override'),
    _ = require('lodash'),
    app;

app = express();

app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json());
app.use(methodOverrride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hod');
mongoose.connection.once('open', function() {
    //Load the models
    app.models = require('./server/models/index');

    console.log('listenint on port 3000');
    app.listen(3000);
});