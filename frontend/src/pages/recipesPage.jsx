import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tile from '../components/tile/tile';
import { RecipesPageWrapper } from './recipesPage.styled';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await axios.get(
        'http://localhost:3000/getRecipes',
      );
      setRecipes(recipes.data);
    };

    getRecipes();
  }, []);

  return (
    <RecipesPageWrapper>
      {recipes?.map((recipe) => (
        <Tile
          key={recipe._id}
          title={recipe.title}
          image={recipe.imageUrl}
        />
      ))}
    </RecipesPageWrapper>
  );
};

export default RecipesPage;
