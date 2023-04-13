const mongoose = require('mongoose');

const QpaperSchema = new mongoose.Schema({
    teacher_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "teacherdetails"
    },
    subject_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "subjects"
    },
    file_path: {
        type: String,
        required: true
    },
    upload_date: {
        type: Date,
        required:true,
        default: Date.now
    }

});

const QpaperModel=mongoose.model('questionpapers',QpaperSchema);
module.exports=QpaperModel;