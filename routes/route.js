
const express = require('express');
const router = express.Router();

var Contact = require('../models/contacts');
//retrieving data
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add contact
router.post('/contact',(req,res,next)=>{
        var newContact = new Contact();
        newContact.first_name=req.body.first_name;
        newContact.last_name=req.body.last_name;
        newContact.phone=req.body.phone;
        newContact.save((err,contacts)=>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        } else {
            res.json({msg : 'Contact added successfully'});
        }
    });
});

//delete contact
router.delete('/contact/:id',(req,res,next)=>{
    console.log(' req.params.id');
    Contact.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});
module.exports = router;