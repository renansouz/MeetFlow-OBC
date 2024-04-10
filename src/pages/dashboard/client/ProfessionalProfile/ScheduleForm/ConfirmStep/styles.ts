import styled from 'styled-components';

export const ConfirmForm = styled.div`
    max-width: 540px;
    margin: 24px auto 0;
    display: flex;
    flex-direction: column;
    gap: 16px;

    label {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const FormHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 24px;
    margin-bottom: 8px;
    border-bottom: 1px solid gray;

    > p {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
            color: gray;
            width: 20px;
            height: 20px;
        }
    }
`;

export const FormError = styled.p`
    color: #f75a68;
`;

export const FormActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 8px;
`;
