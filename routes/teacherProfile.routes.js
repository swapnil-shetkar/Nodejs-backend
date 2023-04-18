const express=require('express');
const router=express.Router();
const Upload=require('../helpers/multer');
const adminController=require('../Controllers/adminController');


router.post('/',async(req,resp)=>{
    await adminController.teacherProfile(req,resp);
})

router.get('/:id',async(req,resp)=>{
    await adminController.getTeacherImage(req,resp);
})

module.exports=router;