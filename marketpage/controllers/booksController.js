const db = require('../models/books');

/*
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  const fetch = require("node-fetch");
  
  //Define methods for bookController
  //const APIkey = process.env.APIkey;
  */
  
  module.exports = {
   
    search: function (req, res) {
      const bookSearchAuthor = req.params.author;
      const bookSearchTitle = req.params.title;
      const bookSearchIsbn = req.params.isbn;
      fetch(
        `http://openlibrary.org/search.json?title=${bookSearchTitle}&author=${bookSearchAuthor}&isbn=${bookSearchIsbn}`
      )
        .then((response) => response.json())
        .then((data) => res.json(data));
    },
    getCollection () {
        return db.find({
          //  user: 
        })
    },
    addTOCollection (req, res) {
        return db.create(req.body).then(result => {
            res.send({
                success: true,
                result,
            })
        }).catch(err => {
            res.send({
                success: false,
                message: err.message,
                stack: err.stack,
            })
        })
    }
  };