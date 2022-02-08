const mongoose = require('mongoose');
// Test
// mongoose.connect('mongodb://localhost:27017/task_db', { useNewUrlParser: true }, (err) => {

// Deployment
mongoose.connect('mongodb+srv://user1:user1@taskapp@cluster0.qrz7p.mongodb.net/Tasks?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('Mongo DB Connected');
    else
        console.log('Error in MongoDB: ' + err);
});

require('./task.model.js');