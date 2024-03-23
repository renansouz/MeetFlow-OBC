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
`;

export const FormDiv = styled.div`
    padding: 30px 0px;
    background-color: white;
    box-shadow: 30px 30px 0px #4338ca;
    width: 70%;
    height: 75%;
    position: relative;
    border-radius: 0.5rem;
    @media not all and (min-width: 768px) {
        width: 100%;
        height: 100%;
        box-shadow: none;
        font-size: 0.8rem;
    }
    @media (min-width: 769px) and (max-width: 1023px) {
        height: 65%;
    }
    @media (min-width: 1280px) {
        width: 85%;
        margin: 2rem;
        margin-right: 4rem;
    }
    @media (min-width: 1537px) {
        width: 65%;
        margin: 2rem;
        margin-right: 4rem;
    }
`;
