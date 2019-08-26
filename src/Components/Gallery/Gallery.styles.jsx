import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    
    ${media.tablet`
        position: relative;
        flex-flow: row wrap;
    `}
`;
