// import mongoose for use
const mongoose = require("mongoose");

/* we create a function that will establish a connection with our 
MongoDB Cluster
*/
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://soalCapstoneProject:Soal@123@cluster0.c83m8.mongodb.net/test"
    );
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;
