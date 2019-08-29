import styled from 'styled-components';
import media from '../../Utilities/MediaQueries';

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


