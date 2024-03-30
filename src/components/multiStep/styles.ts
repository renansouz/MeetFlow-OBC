import styled from 'styled-components';

export const MultiStepContainer = styled.div``;

export const Label = styled.p<{ active?: boolean }>`
    text-align: center;
    font-weight: bold;
    margin-right: 1rem;
    color: ${(props) => (props.active ? '#4338ca' : '#8D8D99')};
`;

export const Steps = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Step = styled.div<{ active?: boolean; stepContent: number; currentStep: number }>`
    width: 35px;
    margin-right: 1rem;
    height: 35px;
    padding: 1.25rem;
    border-radius: 50%;
    border: solid;
    border-color: ${(props) => {
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
    }
    &:after {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 1.2rem;
        font-weight: bolder;
    }
`;

export const DivRepeat = styled.div`
    display: flex;
    align-items: center;
`;
