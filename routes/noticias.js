const express = require('express');
const router = express.Router();

const objetoNoticias = [
    {id: 1 ,titulo:'Noticia Retro', descripcion: 'Noticia retro de hace muchos años', cuerpo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam necessitatibus adipisci maiores accusantium natus neque! Recusandae, nobis! Ad numquam, officiis corrupti architecto esse autem repellat suscipit ab explicabo omnis!', autor: 'Mariano Macias', fecha: Date()},
    {id: 2, titulo:'Otra Noticia Retro', descripcion: 'Agregamos otra Noticia retro', cuerpo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam necessitatibus adipisci maiores accusantium natus neque! Recusandae, nobis! Ad numquam, officiis corrupti architecto esse autem repellat suscipit ab explicabo omnis!', autor: 'Mariano Gandulfo', fecha: Date()}
]

router.get('/all', (req, res, next)=>{
    res.render('noticias', {noticias: objetoNoticias});
});

router.get('/:id', (req, res, next)=>{
    console.log(`El id que llega es: ${req.params.id}`);
    res.end();
})

module.exports = router;