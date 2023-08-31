const express = require('express')
const routes = express.Router()

//valores stardes "nome, idade e data de nascimento"
let db = [
    { '1': { nome: 'Uadson Mota', idade: '30', dt_nacimento: '16/16/1993'} },
    { '2': { nome: 'Natalia Mota', idade: '28', dt_nacimento: '15/11/1995'} },
    { '3': { nome: 'Manuella Mota', idade: '2', dt_nacimento: '31/12/2021'} }, 
]

    //buscar dados
    routes.get('/', (req, res) => {
        return res.json(db)
    })

    //Inserir dados
    routes.post('/add', (req, res) => {
        const body = req.body

        if (!body)
            return res.status(400).end()

        db.push(body)
        return res.json(body)
    })

    routes.delete('/:id', (req, res) => {
        const id = req.params.id

        let newDB = db.filter(item => {
            if(!item[id])
                return item
        })

        db = newDB
        return res.send(newDB)
    })

module.exports = routes