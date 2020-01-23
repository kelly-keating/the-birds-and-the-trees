const express = require('express')

const data = require('../data.json')

const router = express.Router()


router.get('/', (req,res) => {
    res.render('index')
})

router.get('/:type', (req, res) => {
    let stuff = data[req.params.type]

    stuff = stuff.map(obj => ({...obj, type: req.params.type}))
    
    res.render('list', {type: req.params.type, thing: stuff})
})

router.get('/:type/:id', (req, res) => {
    const theOne = data[req.params.type].find(obj => obj.id == req.params.id)
    res.render('profile', theOne)
})


module.exports = router