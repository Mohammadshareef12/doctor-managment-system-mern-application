const mongoose = require('mongoose')

const connectDB = async() => {
    try {
    await mongoose.connect('mongodb+srv://hmohammadshareef333:123456789@cluster0.t6fgp1f.mongodb.net/doctor-app');
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
    }   
    catch (error) {
    console.log(`MongoDB server Issue ${error}` .bgRed.white);
    }

};

module.exports = connectDB;
