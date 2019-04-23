import styled from 'styled-components';

export const Layout = styled.footer`
    height: 100%;
    background-color: ${props => props.theme.footer.bg};

    & > p {
        margin: 0;
        padding: 10px;
    }
`;