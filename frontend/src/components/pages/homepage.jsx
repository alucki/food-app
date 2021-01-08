import React, { useState } from 'react';
import axios from 'axios';
import {
  SvgWrapper,
  StyledFieldset,
  StyledInput,
  StyledForm,
  FormWrapper,
  StyledSubmit,
  HomepageWrapper,
  Text,
} from './homepage.styled';
import { HungrySvg } from './hungry';
import Carousel from '../carousel/carousel';

const Homepage = () => {
  const [ingredient, setIngredient] = useState('');
  const [mealData, setMealData] = useState(null);
  const [notFoundMessage, setNotFoundMessage] = useState(false);

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
      )
      .then((response) => {
        setNotFoundMessage(false);
        setMealData(response.data.meals);
        if (!response?.data?.meals) setNotFoundMessage(true);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const createMealSlides = (mealData) => {
    return mealData?.map((meal) => meal.strMealThumb);
  };

  return (
    <HomepageWrapper>
      <SvgWrapper>
        <HungrySvg />
      </SvgWrapper>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFieldset>
            <label htmlFor="ingredient" />
            <StyledInput
              type="text"
              name="ingredient"
              placeholder="Search for a recipe by ingredient"
              value={ingredient}
              onChange={handleChange}
            />
            <br />
            <br />
            <StyledSubmit type="submit" value="Submit" />
          </StyledFieldset>
        </StyledForm>
      </FormWrapper>
      {/* React.lazy causing flickering when input is changed after showing an image carousel */}
      {mealData && <Carousel slides={createMealSlides(mealData)} />}
      {notFoundMessage && (
        <Text>Oops, no meals found for that ingredient!</Text>
      )}
    </HomepageWrapper>
  );
};

export default Homepage;
