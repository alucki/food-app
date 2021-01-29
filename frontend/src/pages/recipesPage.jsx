import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tile from '../components/tile/tile';
import { RecipesPageWrapper } from './recipesPage.styled';

const RecipesPage = () => {
  const [recipesList, setRecipesList] = useState();

  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await axios.get(
        'http://localhost:3000/getRecipes',
      );
      setRecipesList(recipes.data);
    };

    getRecipes();
  }, []);

  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:3000/recipe/${id}/delete`);

    const newRecipesList = recipesList.filter(
      (recipe) => recipe._id !== id,
    );

    setRecipesList(newRecipesList);
  };

  return (
    <RecipesPageWrapper>
      {recipesList?.map((recipe) => (
        <Tile
          key={recipe._id}
          title={recipe.title}
          image={recipe.imageUrl}
          notes={recipe.notes}
          id={recipe._id}
          deleteOnClick={() => handleDeleteClick(recipe._id)}
        />
      ))}
    </RecipesPageWrapper>
  );
};

export default RecipesPage;
