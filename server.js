let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;
let mongoURL = 'mongodb://localhost:27017/test';
let db;
let login = require('./rest/login/login.js');
let user = require('./rest/user/user.js');
let port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    bodyParser.json();
    req.db = db;
    next();
});

app.post('/api/users', (req, res) => {
    return user.userPost(req, res);
});


// Creates a login token rather than a new user
app.post('/api/login', (req, res) => {
    return login.loginPost(req, res);
});

MongoClient.connect(mongoURL, (err, database) => {
    if (err !== null) {
        // console.log(err);
    }
    db = database;
});

app.listen(port, () => { });
