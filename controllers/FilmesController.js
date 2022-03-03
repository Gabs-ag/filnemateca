const FilmesController = {
    index: (req, res) => {
        const filmes = require("../database/filmes.json")
        res.render('index.ejs',{filmes})
    },
    listarFilmes: (req, res) => {
        const filmes = require('../database/filmes.json')
        res.send(filmes)
    },
    buscaPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json');

        let filme = filmes[posicao]
        res.render('filme.ejs',{filme})
    },
    busca: (req, res) => {
        let trecho = req.query.busca;
        const filmes = require('../database/filmes.json');
        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let resultadoDaBusca = filmes.filter(filtradora);
        res.render('index.ejs', {filmes: resultadoDaBusca});
    },
    buscarPorId: (req, res) => {
    
    },

    buscarPorGenero: (req, res) => {

    },
 }

module.exports = FilmesController




module.exports = FilmesController;