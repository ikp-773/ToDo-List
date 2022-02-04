require('./models/db.js');

const express = require('express');
const taskController = require('./controllers/task_controller');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine', 'hbs');

app.use('/', taskController);

app.listen(6969, () => console.log('Server Started at 6969'));