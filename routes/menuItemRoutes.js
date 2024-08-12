const express  = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async (req,res) => {
try{
    const data = req.body;
    const menuItem = MenuItem(data);
    const response = await menuItem.save();
    console.log('Data Saved');
    res.status(200).json(response);
    
}catch(err){
        console.log(err);
        res.status(500).json({Error : 'Internal Server Error'})   
}
})

router.get('/' , async (req,res) => {
  try{
      const data = await MenuItem.find();
      console.log("Data Fetched");
      res.status(200).json(data);      
  }catch(err){
    console.log(err);
    res.status(500).json({Error : 'Internal Storage Error'});  
  }
    })

    router.get('/:tasteType', async (req,res) => {
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == sweet || tasteType == spicy || tasteType == sour){
        const data = await MenuItem.find({taste : tasteType});
        console.log("Data Fetched ");
        res.status(200).json(data);          
    }else{
          res.status(404).json({Error : 'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({Error : 'Internal Server Error'})
    
  }
    })

    // Updation by using PUT method
    router.put('/:id',async (req,res) => {
       try{
          const menuListId = req.params.id;
          const updatedMenuData = req.body;
          const response = await MenuItem.findByIdAndUpdate(menuListId,updatedMenuData,{
            new : true,
            runValidators : true
          })
          if(!response){
            res.status(404).json({error : 'menuItem not found'})
          }
          console.log('Menu Item Updated');
          res.status(200).json(response);          
       }catch(err){
              console.log(err);
              res.status(500).json({error : 'Internal Server Error'})
       }
    })

    // Comment adding for testing purposes.
    module.exports = router;