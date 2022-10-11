const nodefetch = require("node-fetch")
const express = require("express")
const app = express()
const port = process.env.PORT || 3001;
const produtos = [
    {
        id: 1,
        name: "banana",
        price: 2.5
    },
    {
        id: 2,
        name: "apple",
        price: 2.0
    },
]

app.listen(port, () => { console.log("Porta: ", port) })

app.use(express.json());

app.get('/', (req, res) => {
    res.json(produtos)
})

app.post('/cadastrar', (req, res) => {
    const produto = req.body.product
    const user = req.body.user

    nodefetch('http://servidorA:3000/verificar', {
        method: 'POST',
        body: JSON.stringify({ user })
    }).then(response => response.json())
    .then(resposta => {

        console.log(resposta);

        if (resposta) {
            // produtos.push(produto)

            res.send("Produto inserido");
        } else {
            res.send("Usuário inválido")
        }
    })

})
