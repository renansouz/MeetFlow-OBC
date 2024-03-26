import styled from 'styled-components';

export const Container = styled.div<{ isTimePickerOpen: boolean }>`
    margin: 6px auto 0;
    padding: 0;
    display: grid;
    position: relative;

    grid-template-columns: ${(props) => (props.isTimePickerOpen ? '1fr 280px' : '1fr')};
    width: ${(props) => (props.isTimePickerOpen ? 'auto' : '540px')};

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        width: auto;
    }
`;

export const TimePicker = styled.div`
    border-left: 1px solid #777777;
    padding: 6px 6px 0;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 280px;
`;

export const TimePickerHeader = styled.p`
    font-weight: 500;

    span {
        color: #cccccc;
    }
`;

export const TimePickerList = styled.div`
    margin-top: 3px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;

    @media (max-width: 900px) {
        grid-template-columns: 2fr;
    }
`;

export const TimePickerItem = styled.button`
    border: 0;
    background-color: #777777;
    padding: 2px 0;
    cursor: pointer;
    color: #ffffff;
    border-radius: 3px;
    font-size: 0.875rem;
    line-height: 1.5;

    &:last-child {
        margin-bottom: 6px;
    }

    &:disabled {
        background: none;
        cursor: default;
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        background: #666666;
    }

    &:focus {
        box-shadow: 0 0 0 2px #ffffff;
    }
`;
