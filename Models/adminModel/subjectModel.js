const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    year_id: {
        type: mongoose.Schema.ObjectId,
        // required: true,
        ref: "academicyears"
    },
    name: {
        type: String,
        // required: true
    },
    department_id: {
        type: mongoose.Schema.ObjectId,
        // required: true,
        ref: "departments"
    },
    teacher_id: {
        type: mongoose.Schema.ObjectId,
        // required: true,
        ref: "teacherdetails"
    },
}
)

module.exports = mongoose.model("subjects", subjectSchema);