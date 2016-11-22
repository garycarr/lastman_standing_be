let bcrypt = require('bcrypt');

module.exports = {};

module.exports.loginPost = (req, res) => {
    let login = req.body;
    req.db.collection('users').findOne({
        username: login.username
    }).then((existingUser) => {
        if (existingUser === null || !bcrypt.compareSync(login.password, existingUser.password)) {
            return res.status(400).json({ errors: [{
                error: 'Password or login incorrect'
            }] });
        }
        return res.status(204).json({ id: existingUser._id });
    });
};
return module.exports;
