const express = require('express')

const router = express.Router()


router.get('/', (req,res) => {
    res.send("Yoyo")
})


module.exports = router