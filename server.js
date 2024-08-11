

// Conversion of String to Object (JSON is pass as a String)
// const StringToConvert = '{"name": "Piyush" , "age":24 , "city": "Barcelona" }'
// const jsonObject = JSON.parse(StringToConvert);
// console.log(jsonObject.name);

// Conversion of Object to String
// const objectToConvert = {
//     name: "John",
//     age: 30,
//     city: "Luxemburg"
// };
// const json= JSON.stringify(objectToConvert);
// console.log(json);


// console.log(typeof json);

const express = require('express')
const app = express()
 const db = require('./db')

 const bodyParser  = require('body-parser');
 app.use(bodyParser.json()); // req.body
 app.get('/', function(req,res){
   res.send('Welcome to our Hotel')
 }
)

 

 //const Person = require('./models/Person');
 // const MenuItem = require('./models/MenuItem');

//  app.get('/', function (req, res) { // req(request) , res(Response)
//    res.send('Sure sir,I would love to serve chowmein');
//  })

// // app.post('/person',  (req,res) => { 
// //   res.send("Data is saved")
// // })

// // app.get('/manchurian', (req, res) => { // req(request) , res(Response)
// //     res.send('Sure sir,I would love to serve Manchurian');
// //   })

// //   app.get('/idli', (req, res) => { // req(request) , res(Response)
// //     var customized_idli = {
// //         name : 'Rava idli',
// //         size : '10 cm diameter',
// //         is_sambhar : true,
// //         is_chutney : false
// //     };
// //     res.send(customized_idli);
// //   })

// // Post route to add person
// app.post('/person', async (req,res) =>{
//     try{
//     const data = req.body; // Assuming the request body contains the person data

//     // Create a new person document using the mongoose model
//     const newPerson = new Person(data);
   
//     // Save the new person to the database
//    const response = await newPerson.save();
//    console.log('Data Saved');
//    res.status(200).json(response);
// }
// catch(err){
//     console.log(err);
//     res.status(500).json({error : 'Internal Server Error'})
// }}
// )

// Get method to get the person
// app.get('/person',async (req,res) =>{
//  try{
//     const data =await Person.find();
//     console.log('Data fetched');
//     res.status(200).json(data);
//  }catch(err){
//     console.log(err);
//     res.status(500).json({error : 'Internal Server Error'})
//  }
// })

// Create database for Menu Items
// Post method to add a menu items
// app.post('/menuItem',async (req,res) => {
//      try {
//             const data = req.body;

//             const newMenu = new MenuItem(data);

//             const response = await newMenu.save();
//             console.log('Data Saved ');
//             res.status(200).json(response)
//      }catch(err){
//             console.log(err);
//             res.status(500).json({error : 'Internal Server error'})
//      }
// })

 // Get method to get the menu Items
// app.get('/menuItem',async (res,req)=>{
//    try{
//       const data = await menuItem.find();
//       console.log("Data fetched");
//       res.status(200).json(data)

//    } catch(err){
//       console.log(err);
//       res.status(500).json({error : 'Internal Storage Error'})
//    }
//  })

// app.get('/person/:workType',async (req,res) => {   // Parameterized call
//        try{
//          const workType = req.params.workType // Extract the work type from the URL parameter.
//          if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//             const response = await Person.find({work : workType});
//             console.log('Response fetched');
//             res.status(200).json(response)
//          } else {
//             res.status(404).json({Error : 'Invalid work type'})
//          }
//        }catch(err){
//             console.log(err);
//             res.status(500).json({error : 'Internal Server Error'})
//        }
// })

// Parameterized call for Menu Items
// app.get('/menuItem/:tasteType',async (req,res) =>{
// try{
//    const tasteType = req.params.tasteType;
//    if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
//        const response = await MenuItem.find({taste  : tasteType})
//        console.log("Response fetched");
//        res.status(200).json(response)
//    }else{
//       res.status(404).json({error : 'Invalid work type'})
//    }
// }catch(err){
//       console.log(err);
//       res.status(500).json({error :'Internal server error'})
// }
//  })

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

 // Use the Routers
 app.use('/person',personRoutes)
 app.use ('/menu',menuItemRoutes)

 app.listen(3000, () => {
    console.log("Listening on port 3000")
 }) // Port number 