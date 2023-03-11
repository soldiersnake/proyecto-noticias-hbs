const express = require('express');
const router = express.Router();
const usuarioModel = require('./../models/usuariosModels');

router.get('/', async (req, res, next) => {
    //renderizar una vista
    res.render('login', {messege: null});
});

router.post('/', async (req, res, next) => {
    try{
        console.log(req.body);
        let resultado = await usuarioModel.getUserByEmailAndPassdword(req.body.usuario, req.body.password);
        if(resultado.length > 0){
            // crea la variable de session SUPERGLOBAL
            req.session.usuario = resultado[0].id_usuario;
            console.log(`El valor de la session vale: ${req.session.usuario}`)
            res.redirect('/noticias/all');
        }else{
            res.render('login', {message: 'Usuario o contraseña incorrectos'});
        }
    }catch(error){
        console.log(error);
    }
});

module.exports = router;