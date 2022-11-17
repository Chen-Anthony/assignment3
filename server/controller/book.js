let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
let Book=require('../models/book');
module.exports.displayBookList=(req,res,next)=>{
    Book.find((err,Booklist)=>{
        if (err)
        {
            return console.error(err);
        }
        else{
            res.render('book/list',{
            title:'Books',
            Booklist: Booklist})
        }
    });
    
    
};
module.exports.displayAddPage=(req,res,next)=>{
    res.render('book/add',{title:'Add book'})

};
module.exports.processAddPage = (req,res,next)=>{
    let newBook=Book({
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "price":req.body.price
    });
    Book.create(newBook,(err,Book)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    })

};
module.exports.displayEditPage =(req,res,next)=>{
    let id=req.params.id;
    Book.findById(id,(err,bookToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.render('book/edit',{title:"Edit Book",book:bookToEdit});
        }
    });
}
module.exports.processEditPage =(req,res,next)=>{
    let id=req.params.id;
    let updateBook=Book({
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "price":req.body.price
    });
    Book.updateOne({_id:id},updateBook,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    });

};
module.exports.performDelete=(req,res,next)=>{
    let id=req.params.id;
    Book.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        
        }
    });

};