import styled from 'styled-components';

export const CalendarContainer = styled.div<{ isTimePickerOpen: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    box-shadow: 0 0 2px #1f2937;
    background-color: #09090b;
    border-radius: 2rem;
    min-width: 20rem;
    margin-left: 1rem;
    width: ${(props) => (props.isTimePickerOpen ? '0' : '40rem')};
    @media (max-width: 1024px) {
        margin-left: 0;
    }
`;

export const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const CalendarActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    color: #e2e8f0;

    button {
        all: unset;
        cursor: pointer;
        line-height: 0;
        border-radius: 0.25rem;
        padding: 0.5rem;
        box-shadow: 0 0 0 1px #1f2937;

        svg {
            width: 1.25rem;
            height: 1.25rem;
        }

        &:hover {
            background-color: #1e293b;
            color: #dcdce6;
        }
    }
`;

export const CalendarTitle = styled.span`
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.5rem;
    flex-grow: 1;
    text-align: center;
    span {
        font-size: 1.5rem;
        color: #e2e8f0;
    }
`;

export const CalendarBody = styled.table`
    width: 100%;
    font-family: 'poppins', inherit;
    border-spacing: 0.25rem;
    table-layout: fixed;

    thead th {
        color: #e2e8f0;
        font-weight: 500;
        font-size: 0.75rem;
    }

    tbody:before {
        line-height: 0.75rem;
        content: '.';
        display: block;
        color: #0f172a;
    }

    tbody td {
        box-sizing: border-box;
    }
`;

export const CalendarDay = styled.button`
    all: unset;
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #6b7280;
    text-align: center;
    cursor: pointer;
    border-radius: 1.1rem;
    margin: 0.05rem;

    &:disabled {
        background: none;
        cursor: default;
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        background: #4f46e5;
    }

    &:focus {
        box-shadow: 0 0 0 2px #312e81;
        background: #3730a3;
        border-radius: 1rem;
    }
`;
