import styled from 'styled-components';

import professionalImage from '@/public/area-profissional.jpg';
import pageBackground from '@/public/page-background.svg';
import sobreImage from '@/public/sobre-nos.jpg';

export const BackGroundImage = styled.div`
  background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.65) 40%, rgba(26, 30, 95, 0.65) 95%),
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
  background-image: url(${sobreImage});
  height: 40rem;
  width: 50rem;
  background-size: cover;
  @media (max-width: 1287px) {
    border-radius: 10px;
  }
  @media (max-width: 697px) {
    height: 30rem;
  }
  @media (max-width: 515px) {
    height: 20rem;
  }
`;

export const ProfessionalImage = styled.div`
  background-image: url(${professionalImage});
  height: 40rem;
  width: 50rem;
  background-size: cover;
  @media (max-width: 1287px) {
    border-radius: 10px;
  }
  @media (max-width: 697px) {
    height: 30rem;
  }
  @media (max-width: 515px) {
    height: 20rem;
  }
`;
