let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
let Tracker=require('../models/tracker');
module.exports.displayTrackerList=(req,res,next)=>{
    Tracker.find((err,Trackerlist)=>{
        if (err)
        {
            return console.error(err);
        }
        else{
            res.render('tracker/list',{
            title:'Tracker',
            Trackerlist: Trackerlist})
        }
    });
    
    
};
module.exports.displayAddPage=(req,res,next)=>{
    res.render('tracker/add',{title:'Add user'})

};
module.exports.processAddPage = (req,res,next)=>{
    let newTracker=Tracker({
        "name":req.body.name,
        "gender":req.body.gender,
        "age":req.body.age,
        "height":req.body.height,
        "weight":req.body.weight,
        "weight_goal":req.body.weight_goal
    });
    Tracker.create(newTracker,(err,Tracker)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/tracker-list');
        }
    })

};
module.exports.displayEditPage =(req,res,next)=>{
    let id=req.params.id;
    Tracker.findById(id,(err,trackerToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.render('tracker/edit',{title:"Edit User",tracker:trackerToEdit});
        }
    });
}
module.exports.processEditPage =(req,res,next)=>{
    let id=req.params.id;
    let updateTracker=Tracker({
        "name":req.body.name,
        "gender":req.body.gender,
        "age":req.body.age,
        "height":req.body.height,
        "weight":req.body.weight,
        "weight_goal":req.body.weight_goal
    });
    Tracker.updateOne({_id:id},updateTracker,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/tracker-list');
        }
    });

};
module.exports.performDelete=(req,res,next)=>{
    let id=req.params.id;
    Tracker.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/tracker-list');
        
        }
    });

};