const mongoose = require('mongoose');

const connectdb = ()=>{
    mongoose.connect("mongodb+srv://parthikjadav:parthik2345@cluster0.w7f0xpi.mongodb.net/medicine").then(()=>{
        console.log("Connected to MongoDB")
        
    });
}

module.exports = connectdb;