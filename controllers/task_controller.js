const e = require('express');
const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const mongoose = require('mongoose');

const task = mongoose.model('todo');

router.get('/', (req, res) => {
    res.render('task/add_edit', {
        viewTitle: 'Add Task',
        btn: 'Submit',
        isUpdate: false,

    });
})

router.post('/', (req, res) => {
    console.log(req.body);
    addTask(req, res);
})

// Add Task
function addTask(req, res) {
    var Task = new task();
    Task.taskName = req.body.taskName;
    Task.taskDesc = req.body.taskDesc;
    Task.save((err, doc) => {
        if (!err)
            res.redirect('/todo');
        else {
            console.log('Error in Saving Task : ' + err);
        }
    })
}

// Display 
router.get('/todo', (req, res) => {
    task.find((err, docs) => {
        if (!err) {
            res.render('task/list', {
                list: docs.map(docs => docs.toJSON(), ),
            })
        } else {
            console.log('Error finding doc : ' + err);
        }
    })
});

// Delete Task
router.get('/delete/:id', (req, res) => {
    task.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err)
            res.redirect('/todo');
        else {
            console.log('Error Deleting : ' + err)
        }
    })
});

// Redirect to Edit Task Page
router.get('/edit/:id', (req, res) => {
    task.findById(req.params.id, (err, doc) => {
        if (!err)
            res.render('task/add_edit', {
                viewTitle: 'Edit Task',
                taskName: doc.taskName,
                taskDesc: doc.taskDesc,
                id: doc.id,
                isUpdate: true,
                btn: 'Update'
            })
        else
            console.log("Error retriving data : ", err);

    })
})

// Edit Task
router.post('/edited/:id', (req, res) => {
    task.findByIdAndUpdate(req.params.id, {
        taskName: req.body.taskName,
        taskDesc: req.body.taskDesc
    }, (err, docs) => {
        if (!err)
            res.redirect('/todo');
        else
            console.log('Error in Updating Task : ' + err);

    })

})

module.exports = router;