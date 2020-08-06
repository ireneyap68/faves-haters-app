const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs');
app.use(ejsLayouts);

//control center
app.use('/faves', require('./controllers/faves'))
app.use('/hates', require('./controllers/hates'))

// home route
app.get('/', (req, res)=> {
    res.render('home');
  });

// // animals route
// app.get('/animals',(req, res)=> {
//     res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
//  });


// // foods route
// app.get('/foods',(req, res)=> {
//     res.render('foods', {title: 'Favorite Foods', foods: ['bagels', 'chicken']})
//  });

app.listen(3000)