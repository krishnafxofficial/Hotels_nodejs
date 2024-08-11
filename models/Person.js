/*
Each person's Detail (like chef,manager,waiter)
{
"name" : 'Alice',
"age" : 34,
"work" : "Chef",
"mobile" : "123-456-789",
"email"  : "alice@example.com",
"address" : "12 whitefield",
"salary"  : 6000
}

*/

const mongoose = require('mongoose');

// Define the person Schema
const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true // name is mandatory
    },
    age:{
        type : Number
    },
    work : {
        type : String,
        enum : ["chef","waiter","manager"],
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true  // Use for two person not enter same emails
    },
    address : {
        type : String
    },
    salary : {
        type : Number,
        requied : true
    }
})

// Create person model

const Person = mongoose.model('Person',personSchema);
module.exports = Person;