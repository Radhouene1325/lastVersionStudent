const mongoose = require('mongoose');
// const mongoDB = 'mongodb://102.219.178.17:27017/joobs'; 
 const mongoDB = 'mongodb+srv://khalfaradhouene:10813943radhouene@cluster0.kn5ir.mongodb.net/frontend?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;
console.log("DB connected successfully...")
module.exports = mongoose;

