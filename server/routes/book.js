let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
let Book=require('../models/book');
router.get('/',(req,res,next)=>{
    Book.find((err,Booklist)=>{
        if (err)
        {
            return console.error(err);
        }
        else{
            res.render('book',{
            title:'Book List',
            Booklist: Booklist})
        }
    });
    
    
});
module.exports=router;

