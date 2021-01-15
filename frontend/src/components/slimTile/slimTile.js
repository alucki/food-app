import React from 'react';
import {
  TileWrapper,
  TileImage,
  TileTitle,
  AddButtonWrapper,
} from './slimTile.styles';
import { Add } from '../icons/add';
import axios from 'axios';

const SlimTile = ({ image, title }) => {
  const handleAddClick = () => {
    axios.post(`http://localhost:3000/createPost`, {
      title: `${title}`,
      desc: '',
      author: 'Anna',
    });
  };

  return (
    <TileWrapper>
      <TileImage src={image} />
      <TileTitle>{title}</TileTitle>
      <AddButtonWrapper>
        <Add onClick={handleAddClick} />
      </AddButtonWrapper>
    </TileWrapper>
  );
};

export default SlimTile;
