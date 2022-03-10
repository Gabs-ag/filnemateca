// Importação da biblioteca Express
const express = require('express');
const path = require('path');
const middlewareGlobal = require('./Middleware/middlewareGlobal');
const servidor = express()


servidor.use(express.static(path.join(__dirname, 'public')));

//importar os roteadores

const filmesRouter = require('./routers/FilmesRouter')



//configuração  do template

servidor.set('view engine','ejs')



//aplicando middleware
servidor.use(middlewareGlobal)


servidor.use ('/',filmesRouter)



// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);