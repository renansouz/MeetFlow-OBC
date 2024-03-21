import styled from 'styled-components';

export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* $6 */
    padding: 1.5rem; /* $6 */
`;

export const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CalendarTitle = styled.span`
    font-weight: 500; /* $medium */
    text-transform: capitalize;
    span {
        color: #a1a1a6; /* $gray200 */
    }
`;

export const CalendarActions = styled.div`
    display: flex;
    gap: 0.5rem; /* $2 */
    color: #a1a1a6; /* $gray200 */

    button {
        all: unset; /* Remove todos os estilos padrões do botão */
        cursor: pointer;
        line-height: 0;
        border-radius: 0.25rem; /* $sm */

        svg {
            width: 1.25rem; /* $5 */
            height: 1.25rem; /* $5 */
        }

        &:hover {
            color: #dcdce6; /* $gray100 */
        }

        &:focus {
            box-shadow: 0 0 0 2px #dcdce6; /* $colors$gray100 */
        }
    }
`;

export const CalendarBody = styled.table`
    width: 100%;
    font-family: inherit; /* $default */
    border-spacing: 0.25rem;
    table-layout: fixed;

    thead th {
        color: #a1a1a6; /* $gray200 */
        font-weight: 500; /* $medium */
        font-size: 0.875rem; /* $sm */
    }

    tbody:before {
        line-height: 0.75rem; /* Ajusta o espaçamento entre os dias e o cabeçalho */
        content: '.';
        display: block;
        color: #2f2f33; /* $gray800 */
    }

    tbody td {
        box-sizing: border-box;
    }
`;

export const CalendarDay = styled.button`
    all: unset;
    width: 100%;
    aspect-ratio: 1 / 1; /* Mantém a proporção do botão mesma largura e altura */
    background: #757575; /* $gray600 */
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem; /* $sm */

    &:disabled {
        background: none;
        cursor: default;
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        background: #5e5e5e; /* $gray500 */
    }

    &:focus {
        box-shadow: 0 0 0 2px #dcdce6; /* $colors$gray100 */
    }
`;
