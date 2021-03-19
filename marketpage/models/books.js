const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  key: { type: String, required: true },
  collectionBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  wishlistBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isbn: String,
  cover_i: String,
  edition: String,
  publisher: String,
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;