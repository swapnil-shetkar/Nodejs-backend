const assignment = require('../Models/teacherModel/assignment.js');
const notes = require('../Models/teacherModel/notes.js');
const questionPaper = require('../Models/teacherModel/questionPaper.js');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();


// exports.assignmentUpload = async (req, resp) => {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     const data = new assignment({
//         "teacher_id": req.body.teacher_id,
//         "subject_id": req.body.subject_id,
//         "file_path": result.url

//     })
//     console.log(result)
//     const dataSaved = await data.save();
//     resp.status(200).json(dataSaved);
// }


















exports.assignmentUpload = async (req, resp) => {
    const file = req.files.uploadassignment;
    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
        const data = new assignment({
            "teacher_id": req.body.teacher_id,
            "subject_id": req.body.subject_id,
            "file_path": result.url

        })
        console.log(result)
        const dataSaved = await data.save();
        resp.status(200).json(dataSaved);
    })

}


exports.assignmentDelete = async (req, resp) => {
    const data = await assignment.findById(req.params.id);
    console.log(req.params.id);
    console.log(data);
    const imageUrl = data.file_path;
    const urlArray = imageUrl.split('/');
    const image = urlArray[urlArray.length - 1];
    const imageName = image.split('.')[0];

    assignment.deleteOne({ _id: req.params.id }).then(() => {
        cloudinary.uploader.destroy(imageName, (error, result) => {
            resp.send(result);
        }).catch((error) => {
            resp.send(error);
        })
    }).catch((error) => {
        resp.send(error);
    })
}

exports.assignmentView = async (req, resp) => {
    const data = await assignment.findById(req.params.id );
    console.log(data);
    const imagePath = data.file_path;
    resp.send(imagePath);
}


exports.QpaperUpload = async (req, resp) => {
    const file = req.files.uploadqpaper;
    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
        const data = new questionPaper({
            "teacher_id": req.body.teacher_id,
            "subject_id": req.body.subject_id,
            "file_path": result.url

        })
        console.log(result);
        const dataSaved = await data.save();
        resp.status(200).json(dataSaved);
    })

}

exports.QpaperDelete = async (req, resp) => {
    const data = await questionPaper.find(req.params);
    const imageUrl = data[0].file_path;
    const urlArray = imageUrl.split('/');
    const image = urlArray[urlArray.length - 1];
    const imageName = image.split('.')[0];

    QpaperModel.deleteOne(req.params).then(() => {
        cloudinary.uploader.destroy(imageName, (error, result) => {
            resp.send(result);
        }).catch((error) => {
            resp.send(error);
        })
    }).catch((error) => {
        resp.send(error);
    })
}
exports.QpaperView = async (req, resp) => {
    const data = await questionPaper.find(req.params);
    const imagePath = data[0].file_path;
    resp.send(imagePath);
}

exports.notesUpload = async (req, resp) => {
    const file = req.files.uploadnote;
    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
        const data = new noteModel({
            "teacher_id": req.body.teacher_id,
            "subject_id": req.body.subject_id,
            "file_path": result.url

        })
        console.log(result)
        const dataSaved = await data.save();
        resp.status(200).json(dataSaved);
    })

}

exports.notesDelete = async (req, resp) => {
    const data = await noteModel.find(req.params);
    const imageUrl = data[0].file_path;
    const urlArray = imageUrl.split('/');
    const image = urlArray[urlArray.length - 1];
    const imageName = image.split('.')[0];

    noteModel.deleteOne(req.params).then(() => {
        cloudinary.uploader.destroy(imageName, (error, result) => {
            resp.send(result);
        }).catch((error) => {
            resp.send(error);
        })
    }).catch((error) => {
        resp.send(error);
    })
}

exports.notesView = async (req, resp) => {
    const data = await noteModel.find(req.params);
    const imagePath = data[0].file_path;
    resp.send(imagePath);
}

