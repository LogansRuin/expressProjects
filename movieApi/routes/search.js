const express = require('express');
const router = express.Router();

/* GET movies */
router.get('/movie', function(req, res, next) {
  res.json({
    search: 'movie'
  })
});

/* GET people */
router.get('/person', function(req, res, next) {
  res.json({
    search: 'person'
  })
});

module.exports = router;
