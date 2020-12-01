import React, { useState } from 'react';
import axios from 'axios';
import {
  SvgWrapper,
  StyledFieldset,
  StyledInput,
  StyledForm,
  FormWrapper,
  StyledSubmit,
} from './homepage.styled';
import { HungrySvg } from './hungry';
import Carousel from '../carousel/carousel';

const Homepage = () => {
  const [ingredient, setIngredient] = useState('');
  const [mealData, setMealData] = useState(null);

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
        setMealData(response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const createMealSlides = (data) => {
    return data?.data?.meals?.map((meal) => meal.strMealThumb);
  };

  return (
    <>
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
      {mealData && <Carousel slides={createMealSlides(mealData)} />}
    </>
  );
};

export default Homepage;
