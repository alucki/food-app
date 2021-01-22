const mongoose = require("mongoose");
// what does this do?
const Recipes = mongoose.model("recipes");

exports.baseRoute = async (req, res) => {
  res.send("Server is up and running");
};

exports.getRecipes = async (req, res) => {
  // find method queries the DB using our schema and assigns to a variable
  const recipes = await Recipes.find();
  // send the variable as a JSON response
  res.json(recipes);
};

exports.createRecipe = async (req, res) => {
  await new Recipes(req.body).save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again",
      });
    } else {
      res.status(200).json({
        message: "Recipe created",
        data,
      });
    }
  });
};

exports.getRecipe = async (req, res) => {
  const recipeId = req.params.id;

  await Recipes.findById({ _id: recipeId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again",
      });
    } else {
      res.status(200).json({
        message: "Recipe found",
        data,
      });
    }
  });
};

exports.updateRecipe = async (req, res) => {
  const recipeId = req.params.id;

  await Recipes.findByIdAndUpdate(
    { _id: recipeId },
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Something went wrong, please try again",
        });
      } else {
        res.status(200).json({
          message: "Recipe updated",
          data,
        });
      }
    }
  );
};

exports.deleteRecipe = async (req, res) => {
  const recipeId = req.params.id;

  await Recipes.deleteOne({ _id: recipeId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again",
      });
    } else {
      res.status(200).json({
        message: "Recipe deleted",
        data,
      });
    }
  });
};
