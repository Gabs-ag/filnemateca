// Importação da biblioteca Express
const express = require('express');
const path = require('path');
const middlewareGlobal = require('./Middleware/middlewareGlobal');
const servidor = express()


servidor.use(express.static(path.join(__dirname, 'public')));

servidor.use(express.urlencoded({ extended: false }));


//importar os roteadores

const filmesRouter = require('./routers/FilmesRouter')
const AdmRouter = require('./routers/AdmRouter')


//configuração  do template

servidor.set('view engine','ejs')



//aplicando middleware
servidor.use(middlewareGlobal)


servidor.use ('/',filmesRouter)
servidor.use ('/', AdmRouter)


// Por o servidor para 'ouvir' as requisições
servidor.listen(3000);