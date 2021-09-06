const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    movieName: String,
    rating:Number
})

module.exports = mongoose.model("list_movie",Schema);
