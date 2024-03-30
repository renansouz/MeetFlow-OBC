import styled from 'styled-components';

export const CalendarContainer = styled.div<{ isTimePickerOpen: boolean }>`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2px #1f2937;
    background-color: rgba(165, 180, 252, 0);
    min-width: 20rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-left: 1rem;
    width: ${(props) => (props.isTimePickerOpen ? '0' : '40rem')};
    @media (max-width: 1024px) {
        margin-left: 0;
    }
`;

export const CalendarHeader = styled.div`
    display: flex;
    background-color: rgba(165, 180, 252, 0.1);
    align-items: center;
    padding: 1rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content: space-evenly;
    padding-bottom: 1.5rem;
`;

export const CalendarActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

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
            background-color: #7c3aed;
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
    }
`;

export const CalendarBody = styled.table`
    background-color: rgba(165, 180, 252, 0.1);
    width: 100%;
    font-family: 'Space Grotesk', inherit;
    border-spacing: 0.25rem;
    table-layout: fixed;

    thead th {
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
    background: #818cf8;
    text-align: center;
    cursor: pointer;
    border-radius: 0.1rem;

    &:disabled {
        background: none;
        cursor: default;
        opacity: 0.4;
        background-color: rgba(165, 180, 252, 0.1);
    }

    &:not(:disabled):hover {
        background: #818cf8;
        opacity: 80%;
    }

    &:focus {
        box-shadow: 0 0 0 2px #312e81;
        background: #312e81;
        opacity: 90%;
    }
`;
