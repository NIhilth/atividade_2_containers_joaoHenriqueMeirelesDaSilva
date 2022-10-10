const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const usuarios = [
    {
        id: 1,
        user: "joao",
        password: "01234"
    },
    {
        id: 2,
        user: "bruno",
        password: "98765"
    },
]

app.listen(port, () => { console.log("Porta: ", port)})

app.use(express.json());

app.get('/', (req, res) => {
    res.json(usuarios)
})

app.post('/cadastrar', (req, res) => {
    const usuario = req.body.user

    usuarios.push(usuario)

    res.send("Usuário inserido");
})

app.get('/verificar', (req, res) => {
    const usuarioLogin = req.body.user
    for(const usuario of usuarios){
        if(usuario.password == usuarioLogin.password && usuario.user == usuarioLogin.user){
            res.send(true)
        }
    }

    res.send(false)
})