const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bookCollection: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  bookWhishlist: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;