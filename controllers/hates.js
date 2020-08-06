const express = require('express')
const router = express.Router()

router.get('/animals', (req,res)=>{
    res.render('hates/animals', {title: 'HATES Animals', animals: ['aaa', 'bbb']})
})

router.get('/foods', (req,res)=>{
    res.render('hates/foods', {title: 'HATES Foods', foods: ['ccc', 'ddd']})
})

module.exports = router