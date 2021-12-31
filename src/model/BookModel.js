const mongoose = require('mongoose');

//added the following lines to change the connection uri to point to the hosted atlas database when hosted
var uri = process.env.MONGODB_URI;
if(!uri){
    uri = 'mongodb://localhost:27017/Library';
}
mongoose.connect(uri);

// mongoose.connect('mongodb://localhost:27017/Library');

const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;