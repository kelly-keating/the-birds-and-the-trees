const express = require('express')

const db = require('../db')
// const data = require('../data.json')
const { capitalise } = require('../utils')

const router = express.Router()


router.get('/', (req,res) => {
    res.render('index')
})

router.get('/:type', (req, res) => {
    let type = capitalise(req.params.type)

    db.getAllType(req.params.type)
        .then(arr => {
            console.log(arr)
            arr = arr.map(obj => ({...obj, name: capitalise(obj.name), type: req.params.type, description: JSON.parse(obj.description) }))
            arr.forEach(obj => {
                if(obj.alias == null){
                    delete obj.alias
                }
            })
            res.render('list', {type, thing: arr})

        })

    // let stuff = data[req.params.type]
    // stuff = stuff.map(obj => ({...obj, name: capitalise(obj.name), type: req.params.type}))

})

router.get('/:type/:id', (req, res) => {
    // const theOne = data[req.params.type].find(obj => obj.id == req.params.id)
    db.getTypeById(req.params.type, req.params.id)
        .then(obj => {
            obj.description = JSON.parse(obj.description)
            res.render('profile', {theOne: obj, type: req.params.type})
        })

})


module.exports = router