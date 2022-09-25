const express = require('express')
const router = express.Router()
const moviesData = require('../data/movies')

/* GET now playing movies */
router.get('/now_playing', (req, res, next) => {
  const movies = moviesData.slice(0,20)
  res.json({
    page: "1",
    results: movies,
    dates: {
      maximum: "",
      minimum: ""
    },
    total_pages: Math.ceil( moviesData.length / 20),
    total_results: moviesData.length
  })
})

/* GET movie */
router.get('/:movie_id', (req, res, next) => {
  const movieId = req.params.movie_id;
  const movie = moviesData.find( movie => movie.id === parseInt(movieId) )
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
