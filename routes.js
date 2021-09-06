const express = require('express');
const Model = require('./Model/model');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Checking');
})

router.post('/movieadd',async(req,res)=>{

    // console.log(req.body);
    try{
        const movieData = new Model(
            {
                movieName: req.body.movieName ,
                rating: req.body.rating
            }
        )
        await movieData.save();
        res.send(movieData);
    }
    catch(err)
    {
        res.send(err);
    }
})

router.get('/movieget/:id',async(req,res)=>{
    try{

        const movieData =await Model.findOne({_id:req.params.id})
        
        if(!movieData)
        {
            res.send('No data found')
        }
        else{
            res.send(movieData)
        }

    }
    catch(err)
    {
        res.send(err)
    }
})

router.get('/moviegets/:id',async(req,res)=>{
    try{

        const movieData =await Model.findById(req.params.id)
        
        if(!movieData)
        {
            res.send('No data found')
        }
        else{
            res.send(movieData)
        }

    }
    catch(err)
    {
        res.send(err)
    }
})

router.patch('/update/:id',async(req,res)=>{
    try{

        const movieData =await Model.findById(req.params.id)
        
        if(req.body.movieName)
        {
            movieData.movieName = req.body.movieName;
        }
        if(req.body.rating)
        {
            movieData.rating = req.body.rating;
        }

        await movieData.save();
        res.send(req.body);
    }
    catch(err)
    {
        res.send(err)
    }
})


router.delete('/del/:id',async(req,res)=>{
    try{
        await Model.deleteOne({_id:req.params.id}).then(()=>{
            res.send({del:'Deleted value'});
        })
    }
    catch(err)
    {
        res.send(err);
    }
})






module.exports = router;