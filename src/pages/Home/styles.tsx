import styled from 'styled-components';

import professionalImage from '@/public/img/area-profissional.svg';
import pageBackground from '@/public/img/page-background.svg';
import sobreImage from '@/public/img/sobre-nos.svg';

export const BackGroundImage = styled.div`
    background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.8) 40%, rgba(26, 30, 95, 0.8)), url(${pageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 90%;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    flex-direction: column;
    position: relative;
`;

export const SobreImage = styled.div`
    background-image: linear-gradient(140deg, rgba(3, 3, 36, 0.247) 40%, rgba(26, 30, 95, 0.726)), url(${sobreImage});
    height: 38rem;
    width: 33rem;
    border-radius: 20px;
    background-size: cover;
    @media not all and (min-width: 1450px) {
        height: 30rem;
        width: 25rem;
    }
    @media not all and (min-width: 1280px) {
        background-size: cover;
        height: 35rem;
        width: 40rem;
        margin-bottom: -8rem;
    }
    @media not all and (min-width: 768px) {
        height: 30rem;
        width: 35rem;
    }
    @media not all and (min-width: 640px) {
        width: 20rem;
        height: 25rem;
        padding-left: 10;
        margin-left: 3%;
        margin-right: 3%;
    }
`;

export const ProfessionalImage = styled.div`
    background-image: linear-gradient(140deg, rgba(3, 3, 36, 0.247) 40%, rgba(26, 30, 95, 0.726)), url(${professionalImage});
    height: 38rem;
    width: 33rem;
    border-radius: 20px;
    background-size: cover;
    @media not all and (min-width: 1450px) {
        height: 30rem;
        width: 25rem;
    }
    @media not all and (min-width: 1280px) {
        background-size: cover;
        height: 35rem;
        width: 40rem;
        margin-bottom: -8rem;
    }
    @media not all and (min-width: 768px) {
        height: 30rem;
        width: 35rem;
    }
    @media not all and (min-width: 640px) {
        width: 20rem;
        height: 25rem;
        padding-left: 10;
        margin-left: 3%;
        margin-right: 3%;
    }
`;
