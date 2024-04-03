import styled from 'styled-components';

import professionalImage from '@/public/area-profissional.svg';
import pageBackground from '@/public/page-background.svg';
import sobreImage from '@/public/sobre-nos.jpg';

export const BackGroundImage = styled.div`
    background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.8) 40%, rgba(26, 30, 95, 0.8) 95%),
        url(${pageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
`;

export const SobreImage = styled.div`
    background-image: linear-gradient(to right, rgba(3, 3, 36, 0) 20%, rgba(3, 7, 18, 100) 90%),
        url(${sobreImage});
    height: 80vh;
    width: 100vh;
    background-size: cover;

    @media (max-width: 1279px) {
        background-image: linear-gradient(to right, rgba(3, 3, 36, 0.2) 20%, rgba(3, 7, 18, 100)),
            url(${sobreImage});
        border-radius: 20px;
    }
`;

export const ProfessionalImage = styled.div`
    background-image: linear-gradient(to left, rgba(3, 3, 36, 21%) 33%, rgba(3, 7, 18, 100) 90%),
        url(${professionalImage});
    height: 80vh;
    width: 100vh;
    background-size: cover;

    @media (max-width: 1279px) {
        background-image: linear-gradient(to right, rgba(3, 3, 36, 0.2) 20%, rgba(3, 7, 18, 100)),
            url(${professionalImage});
        border-radius: 20px;
    }
`;
