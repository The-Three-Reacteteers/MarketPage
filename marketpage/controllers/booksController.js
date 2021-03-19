const Book = require("../models/books");
const { Types } = require("mongoose");

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
  getCollection(req, res) {
    const { user } = (req.session && req.session.passport) || {};
    if (!user)
      return res.status(401).send({
        success: false,
      });
    return Book.find(
      {
        collectionBy: user._id,
      },
      (err, docs) => {
        if (err)
          return res.status(500).send({
            success: false,
            message: err.message,
            stack: err.stack,
          });
        else res.status(200).send(docs);
      }
    );
  },
  removeCollection(req, res) {
    const { user } = (req.session && req.session.passport) || {};
    const { id } = req.params;
    if (!user)
      return res.status(401).send({
        success: false,
      });
    return Book.findByIdAndUpdate(
      id,
      { $pull: { collectionBy: Types.ObjectId(user._id) } },
      (err, doc) => {
        if (err)
          return res.status(500).send({
            success: false,
            message: err.message,
            stack: err.stack,
          });
        else res.status(200).send(doc);
      }
    );
  },
  addToCollection(req, res) {
    const { key, ...body } = req.body;
    const { user } = (req.session && req.session.passport) || {};
    if (!user)
      return res.status(401).send({
        success: false,
      });
    return Book.findOne({ key }, (err, doc) => {
      if (doc) {
        return Book.findByIdAndUpdate(
          doc._id,
          { $push: { collectionBy: Types.ObjectId(user._id) } },
          (err, doc) => {
            if (err)
              return res.status(500).send({
                success: false,
                message: err.message,
                stack: err.stack,
              });
            else res.status(200).send(doc);
          }
        );
      } else {
        return Book.create({ ...req.body, collectionBy: [user._id] })
          .then((result) => {
            res.send({
              success: true,
              result,
            });
          })
          .catch((err) => {
            res.status(500).send({
              success: false,
              message: err.message,
              stack: err.stack,
            });
          });
      }
    });
  },
  getWishlist(req, res) {
    const { user } = (req.session && req.session.passport) || {};
    if (!user)
      return res.status(401).send({
        success: false,
      });
    return Book.find(
      {
        wishlistBy: user._id,
      },
      (err, docs) => {
        if (err)
          return res.status(500).send({
            success: false,
            message: err.message,
            stack: err.stack,
          });
        else res.status(200).send(docs);
      }
    );
  },
  removeWishlist(req, res) {
    const { user } = (req.session && req.session.passport) || {};
    const { id } = req.params;
    if (!user)
      return res.status(401).send({
        success: false,
      });
    return Book.findByIdAndUpdate(
      id,
      { $pull: { wishlistBy: Types.ObjectId(user._id) } },
      (err, doc) => {
        if (err)
          return res.status(500).send({
            success: false,
            message: err.message,
            stack: err.stack,
          });
        else res.status(200).send(doc);
      }
    );
  },
  addToWishlist(req, res) {
    const { key, ...body } = req.body;
    const { user } = (req.session && req.session.passport) || {};
    if (!user)
      return res.status(401).send({
        success: false,
      });
    return Book.findOne({ key }, (err, doc) => {
      if (doc) {
        return Book.findByIdAndUpdate(
          doc._id,
          { $push: { wishlistBy: Types.ObjectId(user._id) } },
          (err, doc) => {
            if (err)
              return res.status(500).send({
                success: false,
                message: err.message,
                stack: err.stack,
              });
            else res.status(200).send(doc);
          }
        );
      } else {
        return Book.create({ ...req.body, wishlistBy: [user._id] })
          .then((result) => {
            res.send({
              success: true,
              result,
            });
          })
          .catch((err) => {
            res.status(500).send({
              success: false,
              message: err.message,
              stack: err.stack,
            });
          });
      }
    });
  },
};
