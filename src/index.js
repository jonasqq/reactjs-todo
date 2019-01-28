require('dotenv').config();
const express = require('express');
const path = require('path');

const { NODE_ENV, PORT } = process.env;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../views'));
app.use(express.static('public'));

app.get('/', require('./modules/todo/todo.route'));

app.use((req, res, next) => {
  next({ status: 404, message: 'Route Not Found' });
});
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (NODE_ENV === 'development') {
    return res.status(err.status).json({
      message: err.message,
      stack: err.stack,
    });
  }
  return res.status(err.status).json({ message: err.message });
});

app.listen(PORT);
