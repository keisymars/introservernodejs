const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333;

function mostraMulher(_request, response) {
     response.json({
        nome: 'Keisy',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQGjBZlZPlfPqA/profile-displayphoto-shrink_200_200/0/1672705197814?e=1691625600&v=beta&t=ebi-H9n2tpZYVU5WsvFujjujN3fxqMFocbKaIGhNq0Y',
        minibio:'Desenvolvedora apaixada por tecnologia'
     })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta " , porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)