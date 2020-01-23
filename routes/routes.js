const express = require('express')

const data = require('../data.json')

const router = express.Router()


router.get('/', (req,res) => {
    res.render('index')
})

router.get('/:type', (req, res) => {
    const stuff = data[req.params.type]
    res.render('list', {thing: stuff})
})

router.get('/:type/:id', (req, res) => {
    const theOne = data[req.params.type].find(obj => obj.id == req.params.id)
    res.render('profile', theOne)
})


module.exports = router