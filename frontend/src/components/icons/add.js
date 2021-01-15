import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Add = ({ onClick }) => (
  <div onClick={onClick}>
    <FontAwesomeIcon icon={faPlus} />
  </div>
);
