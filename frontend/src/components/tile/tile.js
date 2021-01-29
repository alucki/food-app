import React, { useState } from 'react';
import axios from 'axios';
import {
  TileNotes,
  TileImage,
  TileWrapper,
  TileTitle,
  TileIconsWrapper,
  TileNotesWrapper,
} from './tile.styles';
import {
  TileEditViewWrapper,
  EditNotesSection,
  SaveButton,
} from './tileEditView.styles';
import { Edit } from '../../icons/edit';
import { Delete } from '../../icons/delete';

const Tile = ({ image, title, notes, deleteOnClick, id }) => {
  const [showEditView, setShowEditView] = useState(false);
  const [editedNote, setEditedNote] = useState(notes);

  const handleSaveClick = (id) => {
    axios.put(`http://localhost:3000/recipe/${id}/update`, {
      title: `${title}`,
      imageUrl: `${image}`,
      notes: `${editedNote}`,
    });
    setShowEditView(false);
  };

  const handleEditClick = () => {
    setShowEditView(true);
  };

  const handleEditNoteOnChange = (e) => {
    setEditedNote(e.target.value);
  };

  return (
    <>
      <TileWrapper showEditView={showEditView}>
        <TileImage src={image} />
        <TileTitle>{title}</TileTitle>
        <TileNotesWrapper>
          <TileNotes>Notes: {notes}</TileNotes>
          <TileIconsWrapper>
            <Edit onClick={handleEditClick} />
            <Delete onClick={deleteOnClick} />
          </TileIconsWrapper>
        </TileNotesWrapper>
      </TileWrapper>
      <TileEditViewWrapper showEditView={showEditView}>
        <label htmlFor="recipe-notes">Notes for {title}</label>
        <EditNotesSection
          name="recipe-notes"
          rows="10"
          value={editedNote}
          onChange={handleEditNoteOnChange}
        />
        <SaveButton onClick={() => handleSaveClick(id)}>
          Save
        </SaveButton>
      </TileEditViewWrapper>
    </>
  );
};

export default Tile;
