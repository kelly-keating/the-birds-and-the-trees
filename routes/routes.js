const express = require('express')

const data = require('../data.json')
const { capitalise } = require('../utils')

const router = express.Router()


router.get('/', (req,res) => {
    res.render('index')
})

router.get('/:type', (req, res) => {
    let stuff = data[req.params.type]
    stuff = stuff.map(obj => ({...obj, name: capitalise(obj.name), type: req.params.type}))

    let type = capitalise(req.params.type)

    res.render('list', {type, thing: stuff})
})

router.get('/:type/:id', (req, res) => {
    const theOne = data[req.params.type].find(obj => obj.id == req.params.id)

    res.render('profile', {theOne, type: req.params.type})
})


module.exports = router