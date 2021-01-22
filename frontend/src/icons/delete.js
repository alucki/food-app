import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const Delete = ({ onClick }) => (
  <div onClick={onClick}>
    <FontAwesomeIcon icon={faTrashAlt} />
  </div>
);
