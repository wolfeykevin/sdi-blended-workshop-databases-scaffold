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

app.post('/books', (req, res) => {
  knex('books')
    .insert({
      id: req.body.id,
      title: req.body.title,
      pages: req.body.pages,
      ISBN: req.body.ISBN,
      published_date: req.body.published_date,
      genre_id: req.body.genre_id,
      publisher_id: req.body.publisher_id,
      format_id: req.body.format_id,
      cover_image: req.body.cover_image
    })
    .then(function () {
      res.send('Added a book')
    })
})

app.delete('/books/:book_id', (req, res) => {
  var query = knex('books')
    .del()
    .where({
      id: req.params.book_id
    })

  query.exec(function (err) {
    if (err) return callback(err);
    res.send('Deleted a book')
    //sendResponse(callback);
  })

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

app.post('/authors', (req, res) => {
  knex('authors')
    .insert({
      author_id: req.body.author_id,
      first_name: req.body.first_name,
      middle_name: req.body.middle_name,
      last_name: req.body.last_name
    })
    .then(() => {
      res.send('Added an author')
    })
})

app.delete('/authors', (req, res) => {
  res.send('Deleted an author')
})

// app.get('/authors_books', (req, res) => {
//   // knex.from('authors')
//   //   .innerJoin('author_id', 'books.author_id', '')
//   //   .where('',)
//   //   .then((data) => {
//   //     res.send(data)
//   //   })
//   // .select('*')
//   // .from('authors_books')
//   // .then(data => res.status(200).json(data))
//   // .catch(err =>
//   //   res.status(404).json({
//   //     message:
//   //       'The data you are looking for could not be found. Please try again.'
//   //   }))
// })

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

app.post('/publishers', (req, res) => {
  knex('publishers')
    .insert({
      publisher_id: req.body.publisher_id,
      publisher_name: req.body.publisher_name
    })
    .then(() => {
      res.send('Added a publisher')
    })
})

app.delete('/publishers', (req, res) => {
  res.send('Deleted a publisher')
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

app.post('/genre', (req, res) => {
  knex('genre')
    .insert({
      genre_id: req.body.genre_id,
      genre: req.body.genre
    })
    .then(() => {
      res.send('Added a genre')
    })
})

app.delete('/genre', (req, res) => {
  res.send('Deleted a genre')
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

app.post('/synopsis', (req, res) => {
  knex('synopsis')
    .insert({
      synopsis_id: req.body.synopsis_id,
      synopsis: req.body.synopsis
    })
})

app.delete('/synopsis', (req, res) => {
  res.send('Deleted a synopsis')
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

app.get('/publishers/:id', function (req, res) {
  knex.from('publishers')
    .innerJoin('books', 'books.publishers_id', 'publishers.publisher_id')
    .where('books.publishers_id', req.para)
    .then(function (data) {
      res.send(data)
    })
})

module.exports = app;