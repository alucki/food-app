const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("recipes", RecipesSchema);
