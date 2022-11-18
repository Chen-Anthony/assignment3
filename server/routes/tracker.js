let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
let Tracker=require('../models/tracker');
let  trackerController=require('../controller/tracker')
router.get('/',trackerController.displayTrackerList);
router.get('/add',trackerController.displayAddPage);
router.post('/add',trackerController.processAddPage);
router.get('/edit/:id',trackerController.displayEditPage);


router.post('/edit/:id',trackerController.processEditPage);
router.get('/delete/:id',trackerController.performDelete);



module.exports=router;

