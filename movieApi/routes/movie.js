const express = require('express')
const router = express.Router()

/* GET now playing movies */
router.get('/now_playing', (req, res, next) => {
  res.json({
    movie: 'now playing'
  })
})

/* GET movie */
router.get('/:movie_id', (req, res, next) => {
  res.json({
    movie: 'single movie'
  })
})

module.exports = router;
