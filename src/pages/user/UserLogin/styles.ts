import styled from 'styled-components';

import pageBackground from '@/public/register-background.jpg';

export const BackGroundDiv = styled.div`
    background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.8) 40%, rgba(26, 30, 95, 0.8)), url(${pageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-position: center center;
    display: flex;
    gap: 50px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormDiv = styled.div`
    padding: 30px 0px;
    background-color: white;
    box-shadow: 30px 30px 0px #4338ca;
    width: 40%;
    height: 75%;
    position: relative;
    border-radius: 0.5rem;
    color: black;
    @media not all and (min-width: 1280px) {
        width: 90%;
    }
    @media not all and (min-width: 768px) {
        width: 100%;
        height: 100%;
        box-shadow: none;
        font-size: 0.8rem;
        padding-bottom: 40rem;
    }
`;
