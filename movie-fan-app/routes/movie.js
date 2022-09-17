const express = require('express')
const router = express.Router()
const request = require('request');
require('dotenv').config();

const apiKey = process.env.TMDB_KEY
const apiBaseUrl = 'http://api.themoviedb.org/3';
const backdropBaseUrl = 'http://image.tmdb.org/t/p/w1280';

router.use((req, res, next) => { 
  res.locals.backdropBaseUrl = backdropBaseUrl
  next()
})

router.get('/:movieId', (req, res, next) => {
  const movieID = req.params.movieId
  const movieUrl = `${apiBaseUrl}/movie/${movieID}?api_key=${apiKey}`

  request.get(movieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.render('single-movie', {movie: parsedData})
  })
})

router.get('/', (req ,res , next) => {
  res.redirect('/')
})

module.exports = router
