let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let MongoClient = require('mongodb').MongoClient;
let mongoURL = 'mongodb://mongo:27017/test';

let db;
let login = require('./rest/login/login.js');
let user = require('./rest/user/user.js');
let port = 3000;

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
        throw new Error(err);
    }
    db = database;
});

app.listen(port, () => { });
