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

export const Hexagon = styled.div`
    background-color: ${props => props.theme.hexagon.bg};
    width: 200px;
    height: 225px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);  margin: 20px 0px 140px 20px;
    flex: 0 20%;
`;

export const Post = styled.div`
    height: 40vh;
    width: 10vh;
    border: 2px solid ${props => props.theme.post.border};
`;