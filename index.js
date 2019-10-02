const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const example = require('./controllers/example');

function errorHandler (err, req, res, next) {
  res.render('pages/error', {error:err});
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/robots.txt', (req, res) => res.sendfile('views/pages/robots.txt'))
  .get('/foo', (req, res) => res.send(bar))
  .use('/example', example)
  .get('/example2', (req, res) => res.render('pages/example'))
  .use(errorHandler)
  .get('*', (req, res) => res.render('pages/notfound'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
