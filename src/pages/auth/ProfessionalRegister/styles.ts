import styled from 'styled-components';

import pageBackground from '@/public/register-background.jpg';

export const BackGroundDiv = styled.div`
  background-image: url(${pageBackground});
  background-repeat: no-repeat;
  width: 50%;
  background-size: cover;
  height: 100%;
  position: fixed;
  background-position: center center;
  flex-direction: column;
  z-index: 1;
`;
