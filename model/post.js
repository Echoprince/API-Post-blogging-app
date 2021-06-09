const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }

}, {timestamps: true})

const Post = mongoose.model('post', schema)

module.exports = Post