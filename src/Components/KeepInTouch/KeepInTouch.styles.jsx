import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const MainPageLayout = styled.div`
    width: 25%;
    margin: auto;
    display: flex;
    flex-direction: row;

    & > a {
        flex: 1;
        margin: .5em;
        padding: .5em;
    }
`;

export const SocialBarLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & > a {
        margin: .25em;
        padding: .25em .5em;
    }

    ${media.tablet`
        display:none;
    `}
`;

