module.exports = (req, res, next) => {

    //verificar se o usuário está logado
    if (req.session.usuario == undefined) {

        res.redirect('/login')
        // se não estiver,diecionar para endereço /login
    } else {

        //se estiver, ir adiante
        next()
    }
}