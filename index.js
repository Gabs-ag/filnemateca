const express = require("express");

const servidor = express();

servidor.get('/',(req,res)=> {
console.log("requisição")
res.send("toma ai kkkkk")
})

servidor.get('/filme',(req,res)=>{
console.log("quero saber um filmekkkkkkkkk faz ae irmão")
res.send("Encanto da Walt Disney Animation Studios conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. A magia deste Encanto abençoou todos os meninos e meninas da família com um dom único, desde superforça até o poder de curar. Todos, exceto Mirabel. Mas, quando ela descobre que a magia que cerca o Encanto está em perigo, Mirabel decide que ela, a única Madrigal sem poderes mágicos, pode ser a última esperança de sua família excepcional")
})

servidor.get('/generos',(req,res)=> {
    console.log("requisição de generos")
    res.send("drama, aventura")
    })

servidor.get('/filmes/:posicao', (req,res)=>{
    let posicao = req.params.posicao
    const filmes = require("./database/filmes.json")
    res.send(filmes[posicao])
})

servidor.get('/busca/:trecho', (req, res)=>{
    console.log("alguem acessou a rota")
    res.send(req.params.trecho)
})


servidor.listen(3000)