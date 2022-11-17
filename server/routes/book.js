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
            res.render('book/list',{
            title:'Books',
            Booklist: Booklist})
        }
    });
    
    
});
router.get('/add',(req,res,next)=>{
    res.render('book/add',{title:'Add book'})

});
router.post('/add',(req,res,next)=>{
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

});
router.get('/edit/:id',(req,res,next)=>{
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

});
router.post('/edit/:id',(req,res,next)=>{
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

});
router.get('/delete/:id',(req,res,next)=>{
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

});



module.exports=router;

