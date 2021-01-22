import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export const Edit = ({ onClick }) => (
  <div onClick={onClick}>
    <FontAwesomeIcon icon={faPencilAlt} />
  </div>
);
