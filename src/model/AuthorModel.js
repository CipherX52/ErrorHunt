const mongoose = require('mongoose');

//added the following lines to change the connection uri to point to the hosted atlas database when hosted
var uri = process.env.MONGODB_URI;
if(!uri){
    uri = 'mongodb://localhost:27017/Library';
}
mongoose.connect(uri);

// mongoose.connect('mongodb://localhost:27017/Library');

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;