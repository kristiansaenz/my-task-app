const mongoose = require('mongoose');

// user validations
const Schema = mongoose.Schema({

    todo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

//https://www.youtube.com/watch?v=7CqJlxBYj-M