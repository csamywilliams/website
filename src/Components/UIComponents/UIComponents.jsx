import styled from 'styled-components';

export const PrimaryButton = styled.button`
    border: 0;
    background-color: ${props => props.theme.button.primary.bg};
    color: ${props => props.theme.button.primary.color};
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
`;