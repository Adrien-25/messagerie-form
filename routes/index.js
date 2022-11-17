const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (requete, reponse) => {
        reponse.render('pages/index',{pageTitle: 'Messagerie form'});
    });
    return router;
}

