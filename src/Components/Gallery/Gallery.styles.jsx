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

export const ImageHexagon = styled.div`
    width: 200px;
    height: 225px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);  margin: 20px 0px 140px 20px;
    flex: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation: fallIn 2s ease-in;

    @keyframes fallIn {
        from {
          transform: translateY(-50%);
        }
        to {
          transform: translateY(0%);
        }
    }

    ${media.tablet`
        flex: 25%;
    `}
`;