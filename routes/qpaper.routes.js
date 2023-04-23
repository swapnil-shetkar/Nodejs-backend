const express=require('express');
const router=express.Router();
const upload=require('../helpers/multer');
const teacherController=require('../Controllers/teacherController');

router.post('/',async(req,resp)=>{
    await teacherController.QpaperUpload(req,resp);
})

router.delete('/:id',async(req,resp)=>{
    await teacherController.QpaperDelete(req,resp);
})

router.get('/:id',async(req,resp)=>{
    await teacherController.QpaperView(req,resp);
})

module.exports=router;