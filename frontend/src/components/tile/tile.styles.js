import styled from 'styled-components';

export const TileWrapper = styled.div`
  width: 250px;
  flex-wrap: wrap;
  border-radius: 5px;
  display: flex;
  background-color: white;
  margin: 20px 0;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`;

export const TileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
`;

export const TileNotes = styled.p`
  min-height: 50px;
`;

export const TileTitle = styled.p`
  min-height: 35px;
  padding: 5px;
  width: 100%;
`;

export const TileNotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
`;

export const TileIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  svg {
    margin: 3px;
  }
`;
