import styled from 'styled-components';

import pageBackground from '@/public/register-background.svg';

export const BackGroundDiv = styled.div`
  background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.35), rgba(26, 30, 95, 0.8)),
    url(${pageBackground});
  background-repeat: no-repeat;
  width: 50%;
  background-size: cover;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background-position: center center;
  flex-direction: column;
  z-index: 1;
`;
