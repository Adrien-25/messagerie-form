const express = require('express');
const {check, validationresult} = require('express-validator');
const router = express.Router();

// const messageRoute = require('./message');
module.exports = (params) => {
    const message = params;

    router.get('/', (requete, reponse) => {
        reponse.render('pages/index',{pageTitle: 'Messagerie form',message: requete.body});
    });

    router.use('/',(requete,reponse) => {
        reponse.render('pages/erreur',{pageTitle: "Cette page n'existe pas",page: "erreur"})
    });
    return router;
}

