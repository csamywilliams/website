import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
  margin: 0 15%;
`;

export const Flex = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
`;

export const ItemA = styled.div`
  min-height: 50vh;
  height: 50vh;
  margin: 1%;
`;

export const ItemB = styled.div`
  min-height: 50vh;
  height: 50vh;
  margin: 1%;
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
