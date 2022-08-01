const User = require('../models/User');

const getUser = (req, res) => {
    User.findOne({ _id: req.params.id })
    .populate('posts')
    .exec((err, user) => {
        if (err) return res.status(500).send(err);
        return res.send(user);
    });
}

// huge bug here: the user's password is not hashed
const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec((err, user) => {
        if (err) return res.status(500).send(err);
        return res.send(user);
    });
}


const deleteUser = (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
    .exec((err, user) => {
        if (err) return res.status(500).send(err);
        return res.send(user);
    });
}


module.exports = {
    getUser,
    updateUser,
    deleteUser
}