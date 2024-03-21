import styled from 'styled-components';

export const MultiStepContainer = styled.div``;

export const Label = styled.p<{ active?: boolean }>`
    text-align: center;
    font-weight: bold;
    color: ${(props) => (props.active ? '#000' : '#8D8D99')};
    font-size: 0.875rem;
`;

export const Steps = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Step = styled.div<{ active?: boolean; stepContent: number; currentStep: number }>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) => {
        if (props.currentStep === 1) {
            return props.stepContent === 1 ? '#4F46E5' : '#323238'; // Roxo ou Cinza
        } else if (props.currentStep === 2) {
            return props.stepContent === 1 ? '#008000' : props.stepContent === 2 ? '#4F46E5' : '#323238'; // Verde, Roxo ou Cinza
        } else if (props.currentStep === 3) {
            return props.stepContent <= 2 ? '#008000' : '#4F46E5'; // Verde, Roxo ou Cinza
        }
        return '#323238'; // Valor padrão
    }};

    &:after {
        content: '${(props) => {
            if (props.currentStep === 1) {
                return props.stepContent;
            } else if (props.currentStep === 2) {
                return props.stepContent === 1 ? '✔' : props.stepContent;
            } else if (props.currentStep === 3) {
                return props.stepContent <= 2 ? '✔' : props.stepContent;
            }
            return props.stepContent;
        }}';
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #fff;
        font-size: 1.8rem;
        font-weight: bolder;
    }
`;

export const DivRepeat = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
