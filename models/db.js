const mongoose = require('mongoose');
// Test
// mongoose.connect('mongodb://localhost:27017/task_db', { useNewUrlParser: true }, (err) => {

// Deployment
mongoose.connect('mongodb+srv://user1:user1@cluster0.pirbs.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('Mongo DB Connected');
    else
        console.log('Error in MongoDB: ' + err);
});

require('./task.model.js');