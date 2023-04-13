const teacher=require('../Models/adminModel/teacherProfile');

exports.teacherProfile=async (req, resp) => {
        console.log(req.body);
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("uploaded ");

        const data = new teacher(
            {
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
}
