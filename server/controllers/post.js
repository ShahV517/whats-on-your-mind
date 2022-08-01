const Post = require('../models/Post');
const User = require('../models/User');
const mongoose = require('mongoose');

// create a new post
const createPost = async (req, res) => {
    const post = new Post({ ...req.body, author: req.user._id });
    try {
        await post.save();
        await User.findOneAndUpdate({ _id: req.user._id }, { $push: { posts: post._id } });
        return res.send(post);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

// get all user's posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.user._id })

        return res.send(posts);
    }
    catch (err) {
        return res.status(400).send(err);
    }

}


// get a post by id
const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findOne({ _id: id })
        .populate('author');
        return res.send(post);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}


// update a post
const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send('Invalid id');
    try {
        const post = await Post.findOneAndUpdate({ _id: id }, { title, content }, { new: true });
        return res.send(post);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}


// delete a post
const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send('Invalid id');
    try {
        await Post.findByIdAndDelete(id);
        res.send("Successfully deleted post");
    }
    catch (err) {
        return res.status(400).send(err);
    }
}


module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}