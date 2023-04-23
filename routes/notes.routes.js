const express=require('express');
const router=express.Router();
const upload=require('../helpers/multer');
const teacherController=require('../Controllers/teacherController');

router.post('/',async(req,resp)=>{
    await teacherController.notesUpload(req,resp);
})

router.delete('/:id',async(req,resp)=>{
    await teacherController.notesDelete(req,resp);
})

router.get('/:id',async(req,resp)=>{
    await teacherController.notesView(req,resp);
})

module.exports=router;