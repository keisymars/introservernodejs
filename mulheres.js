const express = require("express")
const router = express.Router()



const app = express()
const porta = 3333;
const mulheres = [
    {
        nome: 'keisy',
        imagem:'img.img',
        minibio: 'desenvolvedora'
    },

    {
        nome:'maysa',
        imagem: 'mayimg',
        minibio: 'software developer',

    },

    {
        nome: 'maria',
        imagem: 'ki.img',
        minibio: 'pentester',
    }
]

function mostraMulheres(_request, _response) {
    _response.json(mulheres)
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta " , porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)