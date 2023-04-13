const express=require('express');
const router=express.Router();
const upload=require('../helpers/multer');
const teacherController=require('../Controllers/teacherController');


router.post('/',async(req,resp)=>{
    await teacherController.assignmentUpload(req,resp);
})

router.delete('/:id',async(req,resp)=>{
    await teacherController.assignmentDelete(req,resp);
})

router.get('/:id',async(req,resp)=>{
    await teacherController.assignmentView(req,resp);
})

module.exports=router;