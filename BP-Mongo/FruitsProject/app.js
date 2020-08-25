const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"add name bro!"]

    } ,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating: 8,
    review: "AMAZiNG"

});

// fruit.save();
const mango = new Fruit({
    name:"Mango",
    rating: 9,
    review: "the king"

});

const Orange = new Fruit({
    name:"orange",
    rating: 6,
    review: "sourrry"

});


Fruit.insertMany([mango,Orange],function(err){
    if(err){
        console.log(err);
    } else{
        console.log("succesfull added ")
    }
});

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        console.log(fruits);
    }

});

Fruit.deleteOne({_id:"5f44002a826dcb23a4aaf075"},function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("deleted !!")
    }
});
