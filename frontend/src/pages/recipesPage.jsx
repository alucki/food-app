import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await axios.get(
        'http://localhost:3000/getPosts',
      );
      setRecipes(recipes.data);
    };

    getRecipes();
  }, []);

  return <div>Recipes page</div>;
};

export default RecipesPage;
