let mongoose = require('mongoose');
let trackerModel=mongoose.Schema({
    name:String,
    gender:String,
    age:Number,
    height:Number,
    weight:Number,
    weight_goal:Number
    },
    {
        collection:"tracker"
    }


);
module.exports=mongoose.model('Tracker',trackerModel);
