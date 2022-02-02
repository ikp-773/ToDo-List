const mongoose = require('mongoose');
mongoose.connect('mongobd://localhost:27017/task_db', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('Mongo DB Connected');
    else
        console.log('Error in MongoDB: ' + err);
})