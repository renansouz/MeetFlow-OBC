import styled from 'styled-components';

export const Container = styled.div<{ isTimePickerOpen: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: ${(props) => (props.isTimePickerOpen ? 'flex-start' : 'center')};
    margin: 6px auto 0;
    padding: 0;
    max-width: 70rem;
    width: 100%;
`;

export const TimePicker = styled.div`
    padding: 6px 6px 0;
    overflow-y: scroll;
    width: 40%;
`;

export const TimePickerHeader = styled.p`
    font-weight: 500;

    span {
        color: #f1f5f9;
    }
`;

export const TimePickerList = styled.div`
    margin-top: 3px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
`;

export const TimePickerItem = styled.button`
    border: 0;
    background-color: #64748b;
    padding: 2px 0;
    cursor: pointer;
    color: #ffffff;
    border-radius: 3px;
    font-size: 1.25rem;
    line-height: 1.5;
    @media (max-width: 1040px) {
        font-size: 1rem;
    }

    &:disabled {
        background: none;
        cursor: default;
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        background: #4338ca;
    }

    &:focus {
        background: #4338ca;
        box-shadow: 0 0 0 2px #3730a3;
    }
`;
