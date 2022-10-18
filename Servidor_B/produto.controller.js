const nodefetch = require("node-fetch")
const express = require("express")
const app = express()
const port = process.env.PORT || 3001;
const handler = require("./produto.handler")

app.listen(port, () => { console.log("Porta: ", port) })

app.use(express.json());

app.get('/', async (req, res) => {
    res.json(await handler.findAllProducts())
})

app.post('/cadastrar', async (req, res) => {
    const produto = req.body.product
    const user = req.body.user

    await nodefetch(`http://destino:3000/verificar`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(async resposta => {
        if(!resposta.CPF){
            res.json(resposta)
        } else {
            const produtoNovo = {
                description: produto.description,
                name: produto.name,
                price: produto.price,
                userCPF: resposta.CPF
            }
    
            res.json(await handler.saveProduct(produtoNovo))
        }
    })
})
