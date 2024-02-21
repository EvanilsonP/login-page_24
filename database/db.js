const mongoose = require('mongoose');

// Databae connection function
const connectDB = async () => {

    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } 

    catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;