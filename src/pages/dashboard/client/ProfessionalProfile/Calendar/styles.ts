import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  width: 95%;
  padding: 1rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  flex-direction: column;
  background-color: rgba(165, 180, 252, 0.4);
`;

export const CalendarHeader = styled.div`
  display: flex;
  background-color: rgba(165, 180, 252, 0);
  align-items: center;
  padding: 1.2rem;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  justify-content: space-evenly;
  padding-bottom: 1.5rem;
`;

export const CalendarActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

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
      background-color: #918cff;
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
  width: 100%;
  font-family: 'Space Grotesk', inherit;
  border-spacing: 0.25rem;
  table-layout: fixed;

  thead th {
    font-weight: 500;
    font-size: 0.75rem;
    width: 100%;
    padding: 1rem;
  }

  tbody td {
    box-sizing: border-box;
    width: 100%;
  }
`;

export const CalendarDay = styled.button`
  all: unset;
  width: 90%;
  margin: 0.2rem;
  aspect-ratio: 1 / 1;
  background: #918cff;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.2rem;

  &:disabled {
    background: none;
    cursor: default;
    color: rgba(165, 180, 252, 0.9);
    opacity: 1;
    background-color: rgba(165, 180, 252, 0.1);
  }

  &:not(:disabled):hover {
    background: #818cf8;
    opacity: 80%;
  }

  &:focus {
    box-shadow: 0 0 0 2px #312e81;
    background: #818cf8;
    opacity: 90%;
  }
`;
