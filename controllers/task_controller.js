const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('task/add_edit', {
        viewTitle: 'Update ToDo List'
    });
})

router.post('/', (req, res) => {
    console.log(req.body);
})
module.exports = router;