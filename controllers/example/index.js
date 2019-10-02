const express     = require('express');
const router      = new express.Router();

router.get('/:page', function(req, res) {
  payload = {};
  let p = req.params.page;
  let page = '../partials/' + p + '.ejs';
  payload.page = page;
  res.render('pages/', payload);
});

module.exports = router;
