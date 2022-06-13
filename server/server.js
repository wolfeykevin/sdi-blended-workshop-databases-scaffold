const express = require('express');
const app = express();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development'])

app.use(express.json());

app.get('/books', (req, res) => {
  knex
    .select('*')
    .from('books')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/authors', (req, res) => {
  knex
    .select('*')
    .from('authors')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/authors_books', (req, res) => {
  knex
    .select('*')
    .from('authors_books')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/publishers', (req, res) => {
  knex
    .select('*')
    .from('publishers')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/genre', (req, res) => {
  knex
    .select('*')
    .from('genre')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/book_genre', (req, res) => {
  knex
    .select('*')
    .from('book_genre')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/book_format', (req, res) => {
  knex
    .select('*')
    .from('book_format')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/synopsis', (req, res) => {
  knex
    .select('*')
    .from('synopsis')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})

app.get('/book_synopsis', (req, res) => {
  knex
    .select('*')
    .from('book_synopsis')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again.'
      }))
})



module.exports = app;