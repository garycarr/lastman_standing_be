let bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {};

module.exports.userPost = (req, res) => {
    let user = req.body;
    req.db.collection('users').findOne({ username: user.username }).then((existingUser) => {
        if (existingUser !== null) {
            return res.status(400).json({ errors: [{
                error: 'User already exists'
            }] });
        }
        // hash the password and create the user
        user.password = bcrypt.hashSync(user.password, saltRounds);
        req.db.collection('users').insertOne({
            username: user.username,
            fullName: user.fullName,
            password: user.password
        }).then((newUser) => {
            return res.status(200).json({ id: newUser.insertedId });
        });
    });
};
return module.exports;
