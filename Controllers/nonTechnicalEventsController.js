const nontechnicalEvents = require("../Models/adminModel/nonTechnicalEventsModel");
const cloudinary = require('../helpers/cloudinaryUpload.js');

exports.nontechnicalEventUpload = async (req, resp) => {
    const file = req.files.uploadnontechnicalevent;
    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
        const data = new nontechnicalEvents({
            "title": req.body.title,
            "description": req.body.description,
            "link": result.url

        })
        console.log(result)
        const dataSaved = await data.save();
        resp.status(200).json(dataSaved);
    })

}


exports.nontechnicalEventDelete = async (req, resp) => {
    const data = await nontechnicalEvents.findById(req.params.id);
    console.log(req.params.id);
    console.log(data);
    const imageUrl = data.link;
    const urlArray = imageUrl.split('/');
    const image = urlArray[urlArray.length - 1];
    const imageName = image.split('.')[0];

    nontechnicalEvents.deleteOne({ _id: req.params.id }).then(() => {
        cloudinary.uploader.destroy(imageName, (error, result) => {
            resp.send(result);
        }).catch((error) => {
            resp.send(error);
        })
    }).catch((error) => {
        resp.send(error);
    })
}

exports.nontechnicalEventView = async (req, resp) => {
    const data = await nontechnicalEvents.findById(req.params.id);
    console.log(data);
    const imagePath = data.link;
    resp.send(imagePath);
}


exports.nontechnicalEventViewAll = async (req, resp) => {
    const data = await nontechnicalEvents.find();
    const newData = data.map((element, index, array) => {
        return element.link;
    })
    resp.send(newData);
}
