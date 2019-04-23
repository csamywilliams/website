import styled from 'styled-components';

export const Layout = styled.div`
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