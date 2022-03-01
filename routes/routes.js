const express = require('express');
const Model = require('../models/model');
const router = express.Router();

router.post('/post', async(req, res) => {
    const data = new Model({
        firstName: req.body.firstName,
        age: req.body.age,
        address: {
            line: req.body.address.line,
            state: req.body.address.state,
            country: req.body.address.country
        }
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    // res.send('Posting data to the database!');
});

router.get('/getAll', async (req, res) => {
    
    try {
        const allData = await Model.find();
        res.json(allData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    // res.send('Get the data from Database!')
});

router.get('/getOne/:id', async (req, res) => {
    try {
       const oneData = await Model.findById(req.params.id);
       res.json(oneData); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // const 
    // res.send('Get the data based on ID' + req.params.id);
});

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document has been deleted...`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    // res.send('Delete by ID API!' + req.params.id);
});



module.exports = router;