const Tarefa = require ('../models/tarefa');

const findById = id => new Promise((resolve, reject) => {
    Tarefa.findById(id, (err, tarefa) => {
        if(err)
            return reject({error: err});
        if(!tarefa)
            return reject({error: '404'});
        resolve(tarefa); 
    })
})

const saveData = databaseModel => new Promise(
    (resolve, reject) => {
    databaseModel.save((err, tarefa) => {
        if(err) {
            return reject(err);
        }
        return resolve(tarefa);
    })
})

const update = (id, values) => new Promise((resolve, reject) => {
    findById(id).then(tarefa => {
        tarefa.nome = values.nome || tarefa.nome;
        tarefa.desc = values.desc || tarefa.desc;
        tarefa.date = values.date || tarefa.date;
        return saveData(tarefa)
        
    }).then(tarefaAtualizada => {
        resolve(tarefaAtualizada);
    }).catch(ex => {
        reject(ex);
    })
})

const find = condicao => new Promise(
    (resolve, reject) => {
        Tarefa.find(condicao, (err, tarefas) => {
            if (err)
                reject(err);
            return resolve(tarefas)
        })
    })

const create = novaTarefa => new Promise(
    (resolve, reject) => {
        Tarefa.create(novaTarefa, 
            (err, tarefas) => {
            if (err){
                return reject(err);
            }
            return resolve(tarefas)
        })
    }
) 

module.exports = {
    find,
    create,
    update
}