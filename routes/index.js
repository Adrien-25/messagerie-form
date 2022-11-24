const express = require('express');
const {check, validationResult} = require('express-validator');
const MessageController = require('../controllers/MessageController');
const router = express.Router();

module.exports = (params1,params2) => {
     const {messageController} = params1;

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
        // .withMessage('Le nom doit avoir au moins 3 caractères est requis'),
    ], async(requete, reponse) => {
        const erreurs = validationResult(requete);
        console.log(requete.body);

        let messages = {};
        if (!erreurs.isEmpty()){
            messages = { erreurs:erreurs.array()};
        }else {
            console.log(messageController);
            const {title,message,name} = requete.body;
            await messageController.addEntry(title,message,name);
        };
        const messageReel = await messageController.loadMessage();

        reponse.render('pages/index',{pageTitle: 'Messagerie form',message: requete.body, messageReel:messageReel});
         
    });

    router.get('/', (requete, reponse) => {

        reponse.render('pages/index',{pageTitle: 'Messagerie form',message: requete.body,messageReel:params2});
    });
    
    

    router.use('/',(requete,reponse) => {
        reponse.render('pages/erreur',{pageTitle: "Cette page n'existe pas",page: "erreur"})
    });
    return router;
}

