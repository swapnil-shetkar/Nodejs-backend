const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin007:admin007@cluster0.khfswg5.mongodb.net/teacherTable?retryWrites=true&w=majority').
    then(() => {
        console.log(`DB CONNECTED`);
    }).catch((err) => {
        console.log(err);
        console.log(`DB NOT CONNECTED`);
    });
