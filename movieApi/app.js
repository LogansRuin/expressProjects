const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const movieRouter = require('./routes/movie');
const searchRouter = require('./routes/search');

const app = express();
app.use(helmet());

// API Key validation
app.use((req, res, next) => {
  if (req.query.api_key != 123456789) {
    res.status(401)
    res.json("Invalid API Key")
  } else {
    next()
  }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movie', movieRouter);
app.use('/search', searchRouter);


module.exports = app;
