import styled from 'styled-components';

import pageBackground from '@/public/register-background.svg';

export const BackGroundDiv = styled.div`
  background-image: linear-gradient(140deg, rgba(0, 0, 1, 0.35), rgba(26, 30, 95, 0.8)),
    url(${pageBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  z-index: 1;
`;
