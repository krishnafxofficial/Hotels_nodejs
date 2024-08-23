const mongoose = require('mongoose');

// Define the mongoDB connection URL.
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your database name.
//const mongoURL = 'mongodb+srv:KrishnaPareek:Querty12345@cluster0.r9azu.mongodb.net/'
// Setup mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// Get the Default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Event Listeners
db.on('connected', () => {
   console.log("Connected to MongoDB server");
})
db.on('error', (err) => {
    console.log("MongoDB connection error:",err);
 })
 db.on('disconnected', () => {
    console.log(" MongoDB server Disconnected");
 })

 // Export the Database connection
 module.exports = db;

