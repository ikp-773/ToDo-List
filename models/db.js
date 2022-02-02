const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/task_db', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('Mongo DB Connected');
    else
        console.log('Error in MongoDB: ' + err);
});

require('./task.model.js');