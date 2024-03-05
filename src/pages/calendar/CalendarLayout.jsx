import { useState } from "react";
import { createDate } from "../../utils";
import PropTypes from "prop-types";

CalendarLayout.propTypes = {
  input: PropTypes.object
};
export function CalendarLayout({ input }) {
  const { year, month } = createDate();
  const [date, setDate] = useState({
    year,
    month
  });
  console.log(date);
  return (
    <div className="date-control center">
      <h1>
        Hello {input.name} {input.lastName}
      </h1>
      <button className="date-control__button_previous">&#9668;</button>
      <div className="date-control__setDate">
        <span className="setedMonth">{month}</span>
        <span className="setedYear"> {year}</span>
      </div>
      <button className="date-control__button_next">&#9658;</button>
      <button className="date-control__button_today">Сегодня</button>
    </div>
  );
}
