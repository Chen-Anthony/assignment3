let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
let Tracker=require('../models/tracker');
//this allows the route to open the main database page
module.exports.displayTrackerList=(req,res,next)=>{
    Tracker.find((err,Trackerlist)=>{
        if (err)
        {
            return console.error(err);
        }
        else{
            res.render('tracker/list',{
            title:'Gym Member Fitness Level',
            Trackerlist: Trackerlist})
        }
    });
    
    
};
//this allows use to route to the add page which adds users
module.exports.displayAddPage=(req,res,next)=>{
    res.render('tracker/add',{title:'Add user'})

};
//this connects to the schema and adds the database schema forcing user to type something in because its requried
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
//this connects to the edit page and will force the user to type something in
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
        "_id":id,
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
//this allows the delete button to delete data
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