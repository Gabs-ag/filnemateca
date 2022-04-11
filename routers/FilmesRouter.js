const express = require("express");
// importa FilmesController

const middlewareGuardaBusca = require('../middleware/middlewareGuardaBusca')
// criar o roteador com express.Router
const router = express.Router();

const FilmesController = require('../controllers/FilmesController')
// Criando as rotas dos servidor
router.get('/', FilmesController.index);

router.get('/filme', FilmesController.listarFilmes);

router.get('/filmes/:id', FilmesController.buscaPorId);

router.get('/busca', middlewareGuardaBusca, FilmesController.busca);

router.get('/buscaporid/:id', FilmesController.buscaPorId);

router.get('/generos/:genero',FilmesController.buscarPorGenero);



module.exports = router;
