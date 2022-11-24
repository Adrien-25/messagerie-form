const express = require('express');
const {check, validationResult} = require('express-validator');
const MessageController = require('../controllers/MessageController');
const router = express.Router();

module.exports = (params1,params2) => {
     const {messageController} = params1;

    router.post('/', [
        check('title')
        .trim()
        .isLength({min:1})
        .escape()
        .withMessage('Le titre est requis et doit avoir au moins 1 caractères'),
        check('message')
        .trim()
        .isLength({min:5})
        .withMessage('Le message est requis et doit avoir au moins 5 caractères'),
        check('name')
        .trim()
        .isLength({min:3})
        .escape()
        .withMessage('Le nom est requis et doit avoir au moins 3 caractères'),
    ], async(requete, reponse) => {
        const erreurs = validationResult(requete);
        // console.log(erreurs);

        let messages = {};
        if (!erreurs.isEmpty()){
            messages = { erreurs:erreurs.array()};
        }else {
            // console.log(messageController);
            const {title,message,name} = requete.body;
            await messageController.addEntry(title,message,name);
        };
        const messageReel = await messageController.loadMessage();

        console.log(messages.erreurs);
        reponse.render('pages/index',{pageTitle: 'Messagerie form',messages: messages.erreurs, messageReel:messageReel});
    });

    router.get('/', (requete, reponse) => {

        reponse.render('pages/index',{pageTitle: 'Messagerie form',messages: 1,messageReel:params2});
    });
    
    

    router.use('/',(requete,reponse) => {
        reponse.render('pages/erreur',{pageTitle: "Cette page n'existe pas",page: "erreur"})
    });
    return router;
}

