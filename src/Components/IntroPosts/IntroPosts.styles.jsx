import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Grid = styled.div`
  padding-top: 2vh;
  display: grid;
  margin: 0 auto;
  width: 80vw;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: row dense;
`;

export const ItemA = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
`;

export const ItemB = styled.div`
  grid-column: 3;
  grid-row: 1 / span 2;
`;

export const ItemC = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

export const ItemD = styled.div`
  grid-column: 2 ;
  grid-row: 2 ;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

export const ImageLink = styled.a`
  width: 100%;
  height: 100%;
`;
