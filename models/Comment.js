const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

// Model
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;