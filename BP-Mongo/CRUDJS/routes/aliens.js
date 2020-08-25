const express = require("express")
const router = express.Router()
const Alien = require('../models/alien')


//GET
router.get('/', async(req,res) =>{
    try{

        const aliens = await Alien.find()  //waiting for find to comeback
        res.json(aliens)

    }catch(err){
        res.send('Error' + err)
    }
})

//GET BY ID
router.get('/:id', async(req,res) =>{
    try{

        const alien = await Alien.findById(req.params.id)  //waiting for find to comeback
        res.json(alien)

    }catch(err){
        res.send('Error' + err)
    }
})


//POST
router.post('/',async(req,res) =>{
    const alien = new Alien({
        name: req.body.name,
        tech : req.body.tech,
        stud: req.body.stud
    })

    try{
       const a1 =  await alien.save()
       res.json(a1)
       

    }catch(err){
        res.send('Error' + err)
    }

})


//PATCH- CHANGING 
router.patch('/:id',async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.stud = req.body.stud
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error' + err)
    }
})

//DELETE

router.delete('/:id',async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.stud = req.body.stud
        const a1 = await alien.remove()
        res.json(a1)
    }
    catch(err){
        res.send('Error' + err)
    }
})





module.exports = router