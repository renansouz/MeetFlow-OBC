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
    font-weight: bold;
    margin-right: 1rem;
    color: ${(props) => (props.$active ? '#4338ca' : '#8D8D99')};
`;

export const Steps = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Step = styled.div<StepProps>`
    width: 35px;
    margin-right: 1rem;
    height: 35px;
    padding: 1.25rem;
    border-radius: 50%;
    border: solid;
    border-color: ${(props) => {
        if (props.$currentStep === 1) {
            return props.$stepcontent === 1 ? '#4F46E5' : '#323238'; // Roxo ou Cinza
        } else if (props.$currentStep === 2) {
            return props.$stepcontent === 1
                ? '#008000'
                : props.$stepcontent === 2
                  ? '#4F46E5'
                  : '#323238'; // Verde, Roxo ou Cinza
        } else if (props.$currentStep === 3) {
            return props.$stepcontent <= 2 ? '#008000' : '#4F46E5'; // Verde, Roxo ou Cinza
        }
        return '#323238'; // Valor padrão
    }};

    &:after {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 1.2rem;
        font-weight: bolder;

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
