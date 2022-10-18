const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const handler = require("./pessoa.handler")

app.listen(port, () => { console.log("Porta: ", port) })

app.use(express.json());

app.get('/', async (req, res) => {
    res.json(await handler.findAllUsers())
})

app.post('/cadastrar', async (req, res) => {
    const usuarioInfo = req.body
    const novoUsuario = await handler.saveUser(usuarioInfo)
    res.json(novoUsuario)
})

app.post('/verificar', async (req, res) => {
    const user = req.body
    const usuarios = await handler.findAllUsers()
    let usuarioLoggado = "Credenciais erradas!"
    
    for(const usuario of usuarios){
        if(usuario.Password == user.Password && usuario.Name == user.Name && usuario.Name && usuario.Password){
            usuarioLoggado = usuario
        }
    }
    res.json(usuarioLoggado)
})