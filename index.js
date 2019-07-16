const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect mongo
mongoose.connect("mongodb://localhost:27017/tarefas", (err) =>{
    if(err){
        console.log("Banco não conectado")
        console.error(err)
        return
    }
    console.log("Banco Conectado")
})

//cors para fazer requisições cruzadas

//MW
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false});
//ROTAS
const tarefas = require('./routes/tarefas')

app.use("/api", tarefas)
// app.get("/", (req, res, next) =>{
//     res.status(401).send()
// },(req, res) =>{
//     res.send("HAHHAH")
// })

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})

// app.post("/", (req, res) =>{
//     const nome = req.body.nome;
//     res.send(`Ola ${nome}`)
// })