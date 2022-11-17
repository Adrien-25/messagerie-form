const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, './phantom')));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'));

app.get('/', (requete, reponse) => {
    
});

app.listen(port,() => {
    console.log(`Le serveur est démarré sur http://localhost:${port}`);
});