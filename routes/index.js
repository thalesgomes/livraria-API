const express = require("express");
const router = express.Router();
const livrariaController = require('../controllers/livrariaController');

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/livros',livrariaController.show);

router.put('/editar/:id', livrariaController.editarLivro);

module.exports = router;