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
    var rotes;
    //Load the models
    app.models = require('./server/models/index');

    //Load the routes
    routes = require('./server/routes');

    _.each(routes, function(controller, route) {
        app.use(routes, controller(app, route));
    });

    console.log('Node DB proxy listenint on port 3001');
    app.listen(3001);
});