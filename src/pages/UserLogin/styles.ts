import styled from 'styled-components';
import pageBackground from '@/public/img/login-background.jpg';

export const BackGroundDiv = styled.div`
    background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.1) 0%, rgba(26, 30, 95, 0) 90%), url(${pageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 66.6%;
    height: 100%;
    position: fixed;
    background-position: center center;
    gap: 50px;
    z-index: 1;
    justify-content: center;
    align-items: center;
`;

export const FormDiv = styled.div`
    width: 40%;
    height: 75%;
    position: relative;
    border-radius: 0.5rem;
    color: black;
    @media (max-width: 1279px) {
        width: 100vh;
    }
`;
