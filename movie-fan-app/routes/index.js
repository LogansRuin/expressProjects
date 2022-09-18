const { response } = require('express');
const express = require('express');
const router = express.Router();
const request = require('request');
require('dotenv').config();

const apiKey = process.env.TMDB_KEY
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req, res, next) => { 
  res.locals.imageBaseUrl = imageBaseUrl
  next()
})

router.post('/search', (req, res, next) => {
  const search = req.body
  const searchUrl = `${apiBaseUrl}/search/${search.cat}?api_key=${apiKey}&language=en-US&query=${encodeURI(search.movieSearch)}&page=1&include_adult=false`
  request.get(searchUrl, (error, response, searchData) => {
    const result = JSON.parse(searchData)
    res.json(result)
  })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.render('index', { parsedData: parsedData.results })
  })
});

module.exports = router;
