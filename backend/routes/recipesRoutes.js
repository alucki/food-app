const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.baseRoute);

router.get("/getRecipes", recipeController.getRecipes);

router.post("/createRecipe", recipeController.createRecipe);

router.get("/getRecipe/:id", recipeController.getRecipe);

router.put("/recipe/:id/update", recipeController.updateRecipe);

router.delete("/recipe/:id/delete", recipeController.deleteRecipe);

module.exports = router;
