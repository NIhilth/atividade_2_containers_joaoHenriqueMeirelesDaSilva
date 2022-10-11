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
    {
        id: 3,
        user: "bruna",
        password: "45678"
    },
]

app.listen(port, () => { console.log("Porta: ", port) })

app.use(express.json());

app.get('/', (req, res) => {
    res.json(usuarios)
})

app.post('/cadastrar', (req, res) => {
    const usuario = req.body.user

    usuarios.push(usuario)

    res.send("Usuário inserido");
})

app.post('/verificar', async (req, res) => {
    const usuarioLogin = req.body.user
    console.log(req.body);
    for (const usuario of usuarios) {
        try {
            if (usuario.password == usuarioLogin.password && usuario.user == usuarioLogin.user) {
                res.json(true)
                return
            }
        } catch (erro) {
            console.log(erro.message);
        }
    }
    res.json(false)
})