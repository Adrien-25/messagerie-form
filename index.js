const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');

// const MessageController = require('./controllers/messageController');
// const messageController = new MessageController();
//app.use(express.static(path.join(__dirname, './message')));

app.use(express.static(path.join(__dirname, './phantom')));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'));

app.use('/', router());

app.listen(port,() => {
    console.log(`Le serveur est démarré sur http://localhost:${port}`);
});