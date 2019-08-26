import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;

    & > div {
        flex: 1;
        margin: .5em;
        padding: .5em;
    }

    ${media.tablet`
        flex-direction: column;
    `}  
`;