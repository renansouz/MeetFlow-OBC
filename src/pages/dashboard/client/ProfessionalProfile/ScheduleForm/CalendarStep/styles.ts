import styled from 'styled-components';

export const Container = styled.div<{ isTimePickerOpen: boolean }>`
  display: flex;
  justify-content: center;
  padding: 0;
  //  width: ${(props) => (props.isTimePickerOpen ? '0' : '40rem')};
  width: 95%;
`;

export const TimePicker = styled.div`
  display: flex;
  max-height: 60vh;
  overflow-y: scroll;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  width: 30%;
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
  background-color: #918cf1;
  padding: 2px 0;
  cursor: pointer;
  color: #ffffff;
  font-weight: 800;
  border-radius: 3px;
  font-size: 1.25rem;
  line-height: 1.5;
  @media (max-width: 1040px) {
    font-size: 1rem;
  }

  &:focus {
    background: #4338ca;
    box-shadow: 0 0 0 2px #3730a3;
  }
`;
