const express = require('express');
const {check, validationResult} = require('express-validator');
const router = express.Router();

// const messageRoute = require('./message');
module.exports = (params) => {
    const {messageController} = params;

    router.get('/', (requete, reponse) => {
        reponse.render('pages/index',{pageTitle: 'Messagerie form',message: requete.body});
    });
    router.post('/', [
        // check('title')
        // .trim()
        // .isLength({min:1})
        // .escape()
        // .withMessage('Le titre doit avoir au moins 1 caractères est requis'),
        // check('message')
        // .trim()
        // .isLength({min:5})
        // .withMessage('Le titre doit avoir au moins 5 caractères est requis'),
        // check('name')
        // .trim()
        // .isLength({min:3})
        // .escape()
        // .withMessage('Le nom doit avoir au moins 3 caractères est requis')
    ], async(requete, reponse) => {
        // const erreurs = validationResult(requete);
        // console.log(requete.body);

        let messages = {};
        // if (!erreurs.isEmpty()){
        //     messages = { erreurs:erreurs.array()};
        // }else {
            console.log(messageController);
            const {title,message,name} = requete.body;
            await messageController.addEntry(title,message,name);
        // };
        reponse.render('pages/index',{pageTitle: 'Messagerie form',message: requete.body, messages:messages.erreurs});
    });

    router.use('/',(requete,reponse) => {
        reponse.render('pages/erreur',{pageTitle: "Cette page n'existe pas",page: "erreur"})
    });
    return router;
}

