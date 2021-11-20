
const express = require('express');
const router = require('express').Router();
const Theme = require('../model/theme');


 //POST API
router.post('/', (req, res)=> {
    console.log("post");
    let updatedColor = new Theme({
        primary :req.body.primary,
        secondary : req.body.secondary,
        success : req.body.success,
        info : req.body.info,
        warning : req.body.warning,
        danger : req.body.danger,
        cardheader : req.body.cardheader,
        cardheadertext : req.body.cardheadertext
    })
    updatedColor.save((error, newValue)=> {
        if(error){
            console.log("error in data")
        }
        else{
            res.send(newValue)
        }
    }
    )
    
  })
 //PUT API
  router.put('/:id', (req, res)=> {
    console.log(req.params.id);
    Theme.findByIdAndUpdate(req.params.id,{
        $set:{
            primary :req.body.primary,
            secondary : req.body.secondary,
            success : req.body.success,
            info : req.body.info,
            warning : req.body.warning, 
            danger : req.body.danger,
            cardheader : req.body.cardheader,
            cardheadertext : req.body.cardheadertext
        }
    },{new:true},(error, result)=>{
        if(error){
            console.log("Error in data");
            res.send("Error in data")
        }else{
            console.log(result);
                    res.send(result)
                }
    })
    
  })
  router.get('/', (req, res)=> {
    Theme.find((error, result)=> {
        if(error){
            console.log("error in fetchind data")
        }
        else{
            console.log("get in datagetgetgetget");
            res.send(result)
        }
    })
 
   
    
  })
 
 
module.exports = router;