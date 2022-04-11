// Importar o express
const express = require("express");
const AdmController = require("../controllers/AdmController");
const verificaSeEstaLogado = require("../Middleware/verificaSeEstaLogado")
// Criando o roteador
const router = express.Router();

// Criando a rota
router.get('/login', AdmController.mostraLogin)
router.post('/login', AdmController.Login)
router.get('/esqueci', AdmController.mostraEsqueci)
router.post('/esqueci', AdmController.lembrarSenha)
router.get('/admin', verificaSeEstaLogado, AdmController.mostraAdmin)
module.exports = router;