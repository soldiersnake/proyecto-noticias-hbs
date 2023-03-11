const express = require('express');
const router = express.Router();
const noticiasModel = require('./../models/noticiasModels');


router.get('/all', async (req, res, next)=>{
    let noticias_array = await noticiasModel.getNoticias()
    res.render('noticias', {noticias: noticias_array});
});

router.get('/:id', (req, res, next)=>{
    console.log(`El id que llega es: ${req.params.id}`);
    res.end();
})

module.exports = router;