import styled from 'styled-components';

export const MultiStepContainer = styled.div``

export const Label = styled.p `
    color: #000;
    text-align: center;
`

export const Steps = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
`
export const Step = styled.div<{ active?: boolean, numberSize: number, currentStep: number }> `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => {
        if (props.currentStep === 1) {
            return props.numberSize === 1 ? '#4F46E5' : '#323238'; // Roxo ou Cinza
        } else if (props.currentStep === 2) {
            return props.numberSize === 1 ? '#008000' : (props.numberSize === 2 ? '#4F46E5' : '#323238'); // Verde, Roxo ou Cinza
        } else if (props.currentStep === 3) {
            return props.numberSize <= 2 ? '#008000' : '#4F46E5'; // Verde, Roxo ou Cinza
        }
        return '#323238'; // Valor padrão
    }};
    &:after {
            content: '${props => {
            if (props.currentStep === 1) {
                return props.numberSize;
            } else if (props.currentStep === 2) {
                return props.numberSize === 1 ? 'test' : props.numberSize;
            } else if (props.currentStep === 3) {
                return props.numberSize <= 2 ? 'test' : props.numberSize;
            }
            return props.numberSize;
        }}';
        color: #000;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
}
`
export const DivRepeat = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
`