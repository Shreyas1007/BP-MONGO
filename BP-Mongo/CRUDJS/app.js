const express = require("express")
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser: true})

const con = mongoose.connection

//fires open event on connection
con.on ('open', function(){
    console.log('COnnected !!!!')
})


//to take json as input
app.use(express.json())


const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)    //send request to alien.js





app.listen(3000,function(){
    console.log('Server started!!!')
})