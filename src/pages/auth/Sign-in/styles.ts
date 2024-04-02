import styled from 'styled-components';

import logo from '@/public/only-logo-white.png';
import pageBackground from '@/public/register-background.svg';

export const BackGroundDiv = styled.div`
    background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.84) 100%, rgba(26, 30, 95, 0.1) 90%), url(${pageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 66.6%;
    height: 100%;
    position: fixed;
    background-position: center center;
    flex-direction: column;
    gap: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.div`
    background-image: url(${logo});
    background-size: cover;
    height: 9rem;
    width: 6.8rem;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-repeat: no-repeat;
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
