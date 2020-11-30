import React from 'react';
import {
  SvgWrapper,
  StyledFieldset,
  StyledInput,
  StyledForm,
  FormWrapper,
  StyledSubmit,
} from './homepage.styled';
import { HungrySvg } from './hungry';

const Homepage = () => (
  <div>
    <SvgWrapper>
      <HungrySvg />
    </SvgWrapper>
    <FormWrapper>
      <StyledForm>
        <StyledFieldset>
          <label for="ingredient" />
          <StyledInput
            type="text"
            name="ingredient"
            placeholder="Search for a recipe by ingredient"
          />
          <br />
          <br />
          <StyledSubmit type="submit" value="Submit" />
        </StyledFieldset>
      </StyledForm>
    </FormWrapper>
  </div>
);

export default Homepage;
