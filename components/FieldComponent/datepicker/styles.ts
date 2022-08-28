import styled from "styled-components";

interface DayBoxInterface {
  dayName: string;
  active: boolean;
}

interface MonthBoxInterface {
  active: boolean;
}

const DayBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: ${(props: DayBoxInterface) =>
    props.dayName === "Sunday" || props.dayName === "Saturday"
      ? "grey"
      : "black"};
  font-size: 11px;
  background: ${(props: DayBoxInterface) =>
    props.active ? "rgba(0, 0, 0, 0.1)" : "transparent"};
  &:hover {
    transition: all 0, 4s ease;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const MonthBox = styled.div`
  width: 33.3%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 11px;
  background: ${(props: MonthBoxInterface) =>
    props.active ? "rgba(0, 0, 0, 0.1)" : "transparent"};
  &:hover {
    transition: all 0, 4s ease;
    background: rgba(0, 0, 0, 0.1);
  }
`;
const YearBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 11px;
`;

export { DayBox, MonthBox, YearBox };
