import styled from 'styled-components';

export const TileWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 20px 0;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const TileImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px 0 0 5px;
`;

export const TileTitle = styled.p`
  padding: 0 20px;
  font-size: 20px;
`;

export const AddButtonWrapper = styled.div`
  padding: 0 20px;
  border-left: 1px solid grey;

  svg {
    transform: scale(1.5);
  }
`;
