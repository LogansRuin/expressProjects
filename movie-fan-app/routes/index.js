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

router.get('/search', (req, res, next) => {
  const searchQuery = req.query.q
  const searchCategory = req.query.cat
  const searchUrl = `${apiBaseUrl}/search/${searchCategory}?api_key=${apiKey}&language=en-US&query=${encodeURI(searchQuery)}&page=1&include_adult=false`
  request.get(searchUrl, (error, response, searchData) => {
    const result = JSON.parse(searchData)
    res.render('search', {results: result.results, searchQuery: searchQuery, searchCategory: searchCategory})
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
