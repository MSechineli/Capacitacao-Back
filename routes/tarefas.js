const express = require("express");
const Router = express.Router();
const Tarefa = require("../models/tarefa");
const {find} = require('../helpers/dbhelper');
const {create} = require('../helpers/dbhelper');
const {update} = require('../helpers/dbhelper');

Router.get("/tarefas", (req, res) => {
    find({}).then(tarefas => {
        res.status(200).json(tarefas)
    }).catch(ex => {
        res.status(400).send();
    })
})

Router.post("/tarefa", (req, res) => {
    const novaTarefa = {
        nome: req.body.nome,
        desc: req.body.desc,
        data: req.body.data,
    }
    create(novaTarefa).then(tarefa => {
        res.status(201).json(tarefa)    
    }).catch(ex => {
        res.status(400).send()
    })
})

Router.put("/tarefa/:id", (req, res) => {
    const id = req.params.id;
    const tarefaAtualizada = {
        nome: req.body.nome,
        desc: req.body.desc,
        data: req.body.data,
    }
    update(id, tarefaAtualizada).then(tarefa => {
        res.status(200).json(tarefa)
    }).catch(ex => {
        const{error} = ex;
        if(error === '404')
            return res.status(404).send()
        res.status(400).send()
    })
})

module.exports = Router;