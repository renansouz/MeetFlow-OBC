import styled from 'styled-components';

import professionalImage from '@/public/img/area-profissional.svg';
import pageBackground from '@/public/img/page-background.svg';
import sobreImage from '@/public/img/sobre-nos.jpg';

export const BackGroundImage = styled.div`
    background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.8) 40%, rgba(26, 30, 95, 0.8) 95%), url(${pageBackground});
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
    height: 80vh;
    width: 80vh;
    background-size: cover;
    border-radius: 20px;
    @media (max-screen: 1507px) {
        height: 10rem;
        width: 10rem;
    }
`;

export const ProfessionalImage = styled.div`
    background-image: linear-gradient(140deg, rgba(3, 3, 36, 0.247) 40%, rgba(26, 30, 95, 0.726)), url(${professionalImage});
    height: 80vh;
    width: 80vh;
    background-size: cover;
    border-radius: 20px;
    @media (max-screen: 1507px){
        heigh10remt
        widt10remh
    }
`;
