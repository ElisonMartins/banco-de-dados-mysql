const express = require('express');
const app = express();
const User = require("./models/User");

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Pagina inicial - Martins");
});

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then (() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado com sucesso"
        })
    }).catch(() =>{
        return res.status(404).json({
            erro: true,
            mensagem: "Erro: Usuario nao cadastrado com sucesso"
        })
    });

    //res.send("Pagina cadastrar - Martins");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});