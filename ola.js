const express = require("express")

const app = express()
const porta = 3333;
const router = express.Router()

function mostrtaOla(request, response) {
    response.send("Olá Mundo!!!")
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta " , porta)
}

app.use(router.get('/ola', mostrtaOla))
app.listen(porta, mostraPorta)