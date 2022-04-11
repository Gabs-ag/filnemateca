module.exports = {
    mostraLogin: (req, res) => (res.render('login',{erro:0})),
    Login: (req, res) => {
        // 1 - Carregar o array de usuários
        const usuários = require("../database/usuarios.json")

        // 2 - Capturar o email e a senha digitadas pelo visitante!
        // let dados = req.body
        // res.send(dados)
        let emailDigitado = req.body.email
        let senhaDigitada = req.body.senha

        // 3 - Verificar se usuário é cadastrado!
        //     Procuro no array de usuários se existe
        //     algum com login e senha digitados

        let usuario = usuários.find(
            u => {
                if(emailDigitado == u.email && senhaDigitada == u.senha)
                {return true
                } else {
                    return false
                }
            }
        )
        // 4 - Caso exista o usuário com email senha dados, retornar OK!
        if(usuario == undefined){
            res.render('login.ejs',{erro:1})
        } else {
            req.session.usuario = usuario
            res.redirect('/admin')

        }
        //     Caso não exista, dar mensagem "Usuário inexistente!"
    },


    mostraEsqueci: (req, res) => {
        res.render('esqueci.ejs')
    },
    lembrarSenha: (req, res) => {
        res.send(req.body)
    },
// Passo 2:
// Crie uma função dshowAdmin no AdminController. Essa função deve retornar a view admin.ejs
    mostraAdmin:(req, res) =>{
        res.render('admin.ejs')
    }
}