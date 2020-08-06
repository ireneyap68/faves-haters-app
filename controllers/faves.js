const express = require('express')
const router = express.Router()

// animals route
router.get('/animals',(req, res)=> {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
 });


// foods route
router.get('/foods',(req, res)=> {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['bagels', 'chicken']})
 });

 module.exports = router