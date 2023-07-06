const teacher = require('../Models/adminModel/teacherProfile');
const cloudinary = require('../helpers/cloudinaryUpload.js');


exports.teacherProfile = async (req, resp) => {
    const file = req.files.profilepic;
    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        const data = new teacher(
            {
                "year_id": req.body.year_id,
                "name": req.body.name,
                "phoneno": req.body.phoneno,
                "gender": req.body.gender,
                "birthdate": req.body.birthdate,
                "department_id": req.body.department_id,
                "email": req.body.email,
                "address": req.body.address,
                "city": req.body.city,
                "state": req.body.state,
                "pincode": req.body.pincode,
                "imagepath": result.url

            })

        const datasave = await data.save();
        resp.status(200).json(datasave);

    });

};

// exports.getTeacherImage=async(req,resp)=>{
//     const data=await teacher.findById(req.params.id);
//     console.log(data);
//     const image_Path = data.imagepath;
//     resp.send(image_Path);
// }


exports.getTeacherInfo = async (req, resp) => {
    const data = await teacher.findById(req.params.id).populate('year_id', ['year']).populate('department_id', ['name']);
    resp.send(data);
    // console.log(data.department_id.name);
}

exports.getTeacherAllInfo = async (req, resp) => {
    const data = await teacher.find().populate('year_id', ['year']).populate('department_id', ['name']);
    resp.send(data);
}

exports.getYearwiseTeacherInfo=async(req,resp)=>{
    const data = await teacher.find({ year_id: req.params.id }).populate('year_id', ['year']).populate('department_id', ['name']);
    resp.send(data);
}

exports.deleteTeacherInfo = async (req, resp) => {
    const data = await teacher.findById(req.params.id);
    const imageUrl = data.imagepath;
    const urlArray = imageUrl.split('/');
    const image = urlArray[urlArray.length - 1];
    const imageName = image.split('.')[0];

    teacher.deleteOne({ _id: req.params.id }).then(() => {
        cloudinary.uploader.destroy(imageName, (error, result) => {
            resp.send(result);
        }).catch((error) => {
            resp.send(error);
        })
    }).catch((error) => {
        resp.send(error);
    })
}

exports.updateTeacherInfo = async (req, resp) => {
    const data = await teacher.findByIdAndUpdate(req.params.id, req.body,)
    resp.status(200).send(data);
}
