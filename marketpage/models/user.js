const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  books: [
    {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: String,
    edition: String,
    publisher: String,
    year: Number,
    date: {
        type: Date,
        default: Date.now
        }
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;