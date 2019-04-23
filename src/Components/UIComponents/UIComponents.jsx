import styled from 'styled-components';

export const PrimaryButton = styled.button`
    border: 0;
    background-color: ${props => props.theme.button.primary.bg};
    color: ${props => props.theme.button.primary.color};
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.button.primary.hover.bg};
        color: ${props => props.theme.button.primary.hover.color};
        border: 1px solid ${props => props.theme.button.primary.hover.border};
    }
`;

export const ImageHexagon = styled.div`
    width: 200px;
    height: 225px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);  margin: 20px 0px 140px 20px;
    flex: 0 20%;
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
`;


export const PostSummary = styled.div`
    background-color: ${props => props.theme.post.summary.bg};
    opacity: .9;
    height: 18vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const PostIcon = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    right: 0;

    & > svg {
        vertical-align: middle;
        padding: 0 .2rem;
    }

    & > span {
        padding: 0 .3rem;
    }
`;