import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const Delete = ({ onClick }) => (
  <button onClick={onClick}>
    <FontAwesomeIcon icon={faTrashAlt} />
  </button>
);
