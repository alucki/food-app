import React from 'react';
import {
  TileNotes,
  TileImage,
  TileWrapper,
  TileTitle,
  TileIconsWrapper,
  TileNotesWrapper,
} from './tile.styles';
import { Edit } from '../../icons/edit';
import { Delete } from '../../icons/delete';

const Tile = ({ image, title, editOnClick, deleteOnClick }) => {
  return (
    <TileWrapper>
      <TileImage src={image} />
      <TileTitle>{title}</TileTitle>
      <TileNotesWrapper>
        <TileNotes>Notes:</TileNotes>
        <TileIconsWrapper>
          <Edit onclick={editOnClick} />
          <Delete onClick={deleteOnClick} />
        </TileIconsWrapper>
      </TileNotesWrapper>
    </TileWrapper>
  );
};

export default Tile;
