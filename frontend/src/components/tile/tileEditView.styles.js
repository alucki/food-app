import styled from 'styled-components';

export const TileEditViewWrapper = styled.div`
  display: ${({ showEditView }) => (showEditView ? 'flex' : 'none')};
  width: 250px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: white;
  margin: 20px 0;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  min-height: 372px;
  padding: 5px;
`;

export const EditNotesSection = styled.textarea`
  width: 100%;
  height: 80%;
`;

export const SaveButton = styled.button`
  margin-top: 5px;
  width: 100%;
  color: white;
  cursor: pointer;
  background: #84a59d;
  border: none;
  padding: 12px 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
