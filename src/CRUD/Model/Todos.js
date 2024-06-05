const mongoose = require('mongoose');
const validator = require("validator");


const TodoTask = new mongoose.Schema({
    Title: {
        type: String,
        require: [true, "Please Provide Title"]
    },
    Description: {
        type: String,
        require: [true, "Please Provide Description"]
    }
}) 

const Todos = new mongoose.model('Table-1', TodoTask);
module.exports = Todos;