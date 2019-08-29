import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;

    & > div {
        flex: 1;
        margin: .5em;
        display: flex;
        align-items: flex-end;
    }

    ${media.tablet`
        flex-direction: column;
    `}  
`;

export const PostSummary = styled.div`
    background-color: ${props => props.theme.post.summary.bg};
    opacity: .9;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    min-height: 170px;
    justify-content: space-around;

    h3 {
        margin: 12px 0;
    }
 
`;

export const Post = styled.div`
    position: relative;
    min-height: 50vh;
    width: 10vh;
    border: 2px solid ${props => props.theme.post.border};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    display: flex;
    align-content: flex-end;

    &:hover {
        opacity: 1;
        -webkit-animation: flash 1.5s;
        animation: flash 1.5s;
    }

    @-webkit-keyframes flash {
        0% {
            opacity: .4;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes flash {
        0% {
            opacity: .4;
        }
        100% {
            opacity: 1;
        }
    }

    ${media.tablet`
        width: auto;
    `}  

`;

export const PostIcon = styled.div`

    & > svg {
        vertical-align: middle;
        padding: 0 .2rem;
    }

    & > span {
        padding: 0 .3rem;
    }
`;