const express = require('express')
const router = express.Router()
const moviesData = require('../data/movies')

/* GET now playing movies */
router.get('/now_playing', (req, res, next) => {
  const page = req.query.page === undefined ? 1 : req.query.page
  const pageLength = 20
  const startPostion = (page - 1) * pageLength 
  const results = moviesData.slice(startPostion, startPostion + pageLength)
  res.json({
    page,
    results,
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

/* POST movie rating */

router.post('/:movie_id/rating', ( req, res, next ) => {
  res.params
})

/* DELETE movie rating 8 */
router.delete('/:movie_id/rating', ( req, res, next ) => {
  
})

module.exports = router;
