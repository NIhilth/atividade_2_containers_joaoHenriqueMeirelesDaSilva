import fetch from 'node-fetch';

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

app.listen(port, () => { console.log("Porta: ", port)})

app.use(express.json());

app.get('/', (req, res) => {
    res.json(produtos)
})

app.post('/cadastrar', async (req, res) => {
    const produto = req.body.product
    const usuario = req.body.user

    if(await fetch('http://localhost:8080/verificar', {
        method: 'POST',
        body: JSON.stringify({produto, usuario})
    })){
        produtos.push(produto)
        
        res.send("Produto inserido");
    } else {
        res.send("Usuário inválido")
    }
})