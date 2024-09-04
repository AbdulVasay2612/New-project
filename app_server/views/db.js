const mongoose=require('mongoose'); 868.3k (gzipped: 232.6k)
const dbURI="mongodb://localhost:27017//a30";
mongoose.connect(dbURI);
mongoose.connection.on('connected',()=>{
    console.log('Mongoose connected to ${dbURI}');
});
mongoose.connection.on('error',err =>{
    console.log('mongoose connection error:', err);
});
mongoose.connection.on('disconnected',() =>{
    console.log('mongoose connection error:');
});
require("./users")
require("./location")
