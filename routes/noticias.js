const express = require("express");
const router = express.Router();
const noticiasModel = require("./../models/noticiasModels");

router.get("/all", async (req, res, next) => {
  let noticias_array = await noticiasModel.getNoticias();
  res.render("noticias", { noticias: noticias_array });
});

router.get("/:id", async (req, res, next) => {
  try {
    console.log(`El id que llega es: ${req.params.id}`);
    let noticia = await noticiasModel.getNoticiasById(req.params.id);
    res.render("noticia", { array_noticia: noticia });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
