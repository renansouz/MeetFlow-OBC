import styled from 'styled-components';

interface StepProps {
  $active: boolean;
  $stepcontent: number;
  $currentStep: number;
}

interface LabelProps {
  $active: boolean;
}
export const MultiStepContainer = styled.div``;

export const Label = styled.p<LabelProps>`
  text-align: center;
  font-weight: bolder;
  margin-right: 1rem;
  font-size: 1rem;
  color: ${(props) => (props.$active ? '#4e38ff' : '#8D8D99')};
  @media (max-width: 483px) {
    margin-right: 0;
  }
`;

export const Steps = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Step = styled.div<StepProps>`
  width: 30px;
  margin-right: 1rem;
  height: 30px;
  padding: 1rem;
  border-radius: 50%;
  border: solid;
  @media (max-width: 483px) {
    margin-right: 0;
    padding: 0.2rem;
  }
  border-color: ${(props) => {
    if (props.$currentStep === 1) {
      return props.$stepcontent === 1 ? '#4F46E5' : '#8D8D99'; // Roxo ou Cinza
    } else if (props.$currentStep === 2) {
      return props.$stepcontent === 1
        ? '#008000'
        : props.$stepcontent === 2
          ? '#4F46E5'
          : '#8D8D99'; // Verde, Roxo ou Cinza
    } else if (props.$currentStep === 3) {
      return props.$stepcontent <= 2 ? '#008000' : '#4F46E5'; // Verde, Roxo ou Cinza
    }
    return '#8D8D99'; // Valor padrão
  }};
  background-color: ${(props) => {
    if (props.$currentStep === 1) {
      return props.$stepcontent === 1 ? '#4F46E5' : '#8D8D99'; // Roxo ou Cinza
    } else if (props.$currentStep === 2) {
      return props.$stepcontent === 1
        ? '#008000'
        : props.$stepcontent === 2
          ? '#4F46E5'
          : '#8D8D99'; // Verde, Roxo ou Cinza
    } else if (props.$currentStep === 3) {
      return props.$stepcontent <= 2 ? '#008000' : '#4F46E5'; // Verde, Roxo ou Cinza
    }
    return '#8D8D99'; // Valor padrão
  }};

  &:after {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1rem;
    font-weight: bolder;
    color: white;

    content: '${(props) => {
      if (props.$currentStep === 1) {
        return props.$stepcontent;
      } else if (props.$currentStep === 2) {
        return props.$stepcontent === 1 ? '✔' : props.$stepcontent;
      } else if (props.$currentStep === 3) {
        return props.$stepcontent <= 2 ? '✔' : props.$stepcontent;
      }
      return props.$stepcontent;
    }}';
  }
`;

export const DivRepeat = styled.div`
  display: flex;
  align-items: center;
`;
