


var express             = require('express'),                                //create app with express
    app                 = express(),                                         //app is now express method
    morgan              = require('morgan'),                                 //log requests to console (for express 4)
    mongoose            = require('mongoose'),                               //requires mongoose
    bodyParser          = require('body-parser'),                            //pull data from html POST
    methodOverride      = require('method-override'),                        //simulate DELETE and PUT
    //database            = require('./configs/database.js'),                  //db url connection
    jwt                 = require('express-jwt');

//mongoose.connect(database.url); //connect to database

app.use(express.static(__dirname + '/public/'));                              //set the static files location /public/

var jwtCheck = jwt({
    secret: new Buffer('QAsC-8cqZ4LA4bsbHv5pebyl68OfOF58pyYEmbqTQsq_GZCMhSZQnYo7twf8ZxiB', 'base64'),
    audience: 'LgrXG2C7GoQSVp4hdlNO31M9JQFkBHg5'
});

app.use(morgan('dev'));                                                      //log every request to console

app.use(bodyParser.urlencoded({'extended': 'true'}));                        //parse application/x-www-form-urlencoded

app.use(bodyParser.json());                                                  //parse application/json

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));              //parse application/vnd.api+json as json

app.use(methodOverride());

app.use('/api/home.html', jwtCheck);

//===== Routes =====//

require('./config/routes.js')(app);

//===== Listener =====//

app.listen(8000);
 console.log("Listening at 8000");