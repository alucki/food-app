import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export const Edit = ({ onClick }) => (
  <button onClick={onClick}>
    <FontAwesomeIcon icon={faPencilAlt} />
  </button>
);
