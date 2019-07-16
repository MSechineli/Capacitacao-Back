const mongoose = require("mongoose");

const TarefaModel = mongoose.Schema({
    nome: {
        type: String, 
        required: true, 
        trim: true
    },
    desc: {
        type: String,
        trim: true,
    },
    date: Date,
    foiCompletada: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('tarefa', TarefaModel)