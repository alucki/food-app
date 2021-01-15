import React from 'react';
import {
  TileWrapper,
  TileImage,
  TileTitle,
  AddButtonWrapper,
} from './slimTile.styles';
import { Add } from '../icons/add';

const SlimTile = ({ image, title }) => {
  return (
    <TileWrapper>
      <TileImage src={image} />
      <TileTitle>{title}</TileTitle>
      <AddButtonWrapper>
        <Add />
      </AddButtonWrapper>
    </TileWrapper>
  );
};

export default SlimTile;
