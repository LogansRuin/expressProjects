const express = require('express')
const router = express.Router()
const movies = require('../data/movies')

/* GET now playing movies */
router.get('/now_playing', (req, res, next) => {
  res.json({
    movie: 'now playing'
  })
})

/* GET movie */
router.get('/:movie_id', (req, res, next) => {
  const movieId = req.params.movie_id;
  const movie = movies.find( movie => movie.id === parseInt(movieId) )
  if (movie === undefined) {
    res.json({
      "success": false,
      "status_code": 34,
      "status_message": "The resource you requested could not be found."
    })
  } else {
    res.json(movie)
  }
})

module.exports = router;
