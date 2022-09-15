const express = require('express')
const router = express.Router()
const request = require('request');
require('dotenv').config();

const apiKey = process.env.TMDB_KEY
const apiBaseUrl = 'http://api.themoviedb.org/3';
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.get('/:movieId', (req, res, next) => {
  const movieID = req.params.movieId
  const movieUrl = `${apiBaseUrl}/movie/${movieID}?api_key=${apiKey}`

  request.get(movieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.json(parsedData)
  })
})

router.get('/', (req ,res , next) => {
  res.redirect('/')
})

module.exports = router
