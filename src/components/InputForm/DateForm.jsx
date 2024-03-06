import { useState } from "react";
import { createDate } from "../../utils";
import PropTypes from "prop-types";
import "./style.css";

DateForm.propTypes = {
  input: PropTypes.object,
};

export function DateForm({ input }) {
  const { year } = createDate();
  const [date, setDate] = useState(year);

  function handleClickNextYear() {
    setDate(date + 1);
  }
  function handleClickPrevioustYear() {
    setDate(date - 1);
  }
  return (
    <div className="container">
      <div className="drop">
        <div className="content">
          <h1>
            Hello
            <br />
            {input.name} {input.lastName}
          </h1>
          <div className="content__date-control">
            <button
              className="date-control__button_previous"
              onClick={handleClickPrevioustYear}
            >
              &#9668;
            </button>
            <div className="date-control__setDate">
              <span className="setedYear">{date}</span>
            </div>
            <button
              className="date-control__button_next"
              onClick={handleClickNextYear}
            >
              &#9658;
            </button>
          </div>
          <button
            className="date-control__button_today"
            onClick={() => setDate(year)}
          >
            Текущий год
          </button>
        </div>
      </div>
    </div>
  );
}
