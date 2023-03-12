const express = require("express");
const router = express.Router();
const noticiasModel = require("./../models/noticiasModels");

router.post('/comentar', async (req, res, next) => {
  try{
    console.log(`El valor de la sesion en noticias es : ${req.session.usuario}`);
    // verificar que la sesion ste creada antes de publicar el comentario
    let objetoComentario = {
      id_noticia: req.body.id_noticia,
      comentario: req.body.comentario
    };
    let resultado = noticiasModel.crearComentario(objetoComentario);
    console.log(resultado);
    res.redirect('/noticias/all');
  }catch(error){
    console.log(error);
  }
});

router.get("/all", async (req, res, next) => {
  console.log(`El valor de la sesion en noticias es : ${req.session.usuario}`)
  let noticias_array = await noticiasModel.getNoticias();
  res.render("noticias", { noticias: noticias_array });
});

router.get("/:id", async (req, res, next) => {
  try {
    let status_session = false;
    req.session.usuario ? status_session = true : status_session = false;
    console.log(`El id que llega es: ${req.params.id}`);
    let noticia = await noticiasModel.getNoticiasById(req.params.id);
    let comentario = await noticiasModel.getComentariosById(req.params.id);
    res.render("noticia", { array_noticia: noticia, status : status_session, id_noticia: req.params.id, array_comentario: comentario });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
