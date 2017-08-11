var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://vinod9600:yJn7b7BN3RiSv5SE@contactlist-shard-00-00-26xeg.mongodb.net:27017,contactlist-shard-00-01-26xeg.mongodb.net:27017,contactlist-shard-00-02-26xeg.mongodb.net:27017/contactlist?ssl=true&replicaSet=ContactList-shard-0&authSource=admin";
app.use(morgan('dev'));
//adding middleware - cors
app.use(cors());
app.use(bodyparser.json()); // for parsing application/json
app.use(bodyparser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


const route = require('./routes/route');

//connect to mongodb
MongoClient.connect(uri, function(err, db) {
  db.close();
});
/*
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error to connect to database:' + err);
    }
});*/
app.use('/api', route);


//body- parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//port number
const port = 3000;

//testing Server
app.get('/app',(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port:' + port);
});
