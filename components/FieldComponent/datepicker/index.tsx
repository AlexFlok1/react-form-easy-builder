import { FC, useEffect, useState } from "react";
import { DayBox, MonthBox, YearBox } from "./styles";

interface setupInterface {
  month: number;
  day: number;
  year: number;
  days: number;
}

interface propsInterface {
  date: string;
  handleChange: Function;
}

const DatePickerComponent: FC<propsInterface> = (props: propsInterface) => {
  const { date, handleChange } = props;
  const [setup, setSetup] = useState<setupInterface | null>(null);
  const [touched, setTouched] = useState<boolean>(false);

  const monthBoxComponent = (month: number) => {
    const monthName = new Date(0, month).toLocaleString("default", {
      month: "short",
    });
    return (
      <MonthBox
        onClick={() => {
          actionChange(month, "month");
          setTouched(true);
        }}
        key={`month-${month}`}
        active={month === setup!.month}
      >
        {monthName}
      </MonthBox>
    );
  };

  const dayBoxComponent = (val: number) => {
    const weekDay = new Date();
    weekDay.setDate(val);
    const dayName = weekDay.toLocaleString("default", { weekday: "long" });
    return (
      <>
        <DayBox
          onClick={() => {
            actionChange(val, "day");
            setTouched(true);
          }}
          dayName={dayName}
          active={val === setup!.day}
          key={`day-${val}`}
        >
          {val}
        </DayBox>
        {dayName === "Sunday" && (
          <span style={{ flexBasis: "100%", height: 0 }} />
        )}
      </>
    );
  };

  const actionChange = (value: any, key: string) => {
    setSetup({ ...setup!, [key]: value });
  };

  useEffect(() => {
    if (setup && touched)
      handleChange(
        new Date(setup!.year, setup!.month, setup!.day).toLocaleDateString(),
      );
  }, [handleChange, setup, touched]);

  useEffect(() => {
    const current = date ? new Date(date) : new Date();
    setSetup({
      month: current.getMonth(),
      day: current.getDate(),
      year: current.getFullYear(),
      days: new Date(
        current.getFullYear(),
        current.getMonth() + 1,
        0,
      ).getDate(),
    });
  }, [date]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "250px", display: "flex", flexWrap: "wrap" }}>
        {setup &&
          new Array(setup?.days)
            .fill(0)
            .map((_, index) => dayBoxComponent(index + 1))}
      </div>
      <div
        style={{
          width: "117px",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "0px",
          alignItems: "center",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        {setup && (
          <YearBox>
            <select
              onChange={(e) => {
                actionChange(e.currentTarget.value, "year");
                setTouched(true);
              }}
              style={{ width: "100%" }}
              defaultValue={setup!.year}
            >
              {new Array(100).fill(0).map((_, indx) => (
                <option
                  value={new Date().getFullYear() - indx}
                  key={`year-${indx}`}
                >
                  {new Date().getFullYear() - indx}
                </option>
              ))}
            </select>
          </YearBox>
        )}
        {setup &&
          new Array(12).fill(0).map((_, index) => monthBoxComponent(index))}
      </div>
    </div>
  );
};

export default DatePickerComponent;
