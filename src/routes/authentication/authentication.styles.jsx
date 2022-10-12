import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin: 60px auto;

    @media screen and (max-width: 900px) {
        width: auto;
        flex-direction: column;
        align-items: center;
        gap: 80px;
    };
`;