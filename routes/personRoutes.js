const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/',async (req,res) => {
    try{
        const data = req.body;
        const newPersonData  =  Person(data);
        const response = await newPersonData.save();
        console.log("Data saved ");
        res.status(200).json(response);
    } catch(err){
         console.log(err);
         res.status(500).json({error :'Internal Server Error'})          
    }
})

router.get('/',async (req,res) => {
      try{
          const data = await Person.find();
          console.log('Data Fetched');
          res.status(200).json(data);
      }catch(err){
            console.log(err);
            res.status(500).json({error : 'Internal Server error'})
      }
})

router.get('/:workType',async(req,res) => {
  try{
    const workType  = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work : workType});
        console.log('Response Fetched');
        res.status(200).json(response);
    }else{
        res.status(404).json({Error : 'Invalid work Type'})
    }
  }catch(err){
      console.log(err);
      res.status(500).json({error : 'Internal Server error'})
  }
})

// Using PUT method
router.put('/:id', async (req,res) => {
  try{
    const personId = req.params.id; // Extract the ID from the URL parameter
    const updatedPersonData = req.body; // Updated data from the person
    const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new : true, // Return the Updated document
        runValidators : true // Run mongoose validation
    })
    if(!response){
        res.status(404).json({error : 'Person not found'})
    }
    console.log("Data updated");
    res.status(200).json(response);    
  }
  catch(err){
        console.log(err);
        res.status(500).json({Error : 'Internal Server Error'})        
  }
})

module.exports = router;