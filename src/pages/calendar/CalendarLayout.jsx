import { useNavigate } from "react-router-dom";
import { getColor } from "../../utils";
import { Button } from "antd";
import { DateForm } from "../../components/InputForm/DateForm";
import { useState } from "react";

export function CalendarLayout(props) {
  const phrases = [
    "Я волшебная кнопка",
    "Жмакни меня",
    "Жми еще",
    "Давай, давай",
  ];

  const navigate = useNavigate();
  const [color, setColor] = useState(null);
  const [phrase, setPhrase] = useState(phrases[0]);

  function handleClick() {
    setColor(getColor());
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }

  function handleHome() {
    navigate("/");
  }

  return (
    <>
      <img
        style={{ cursor: "pointer" }}
        src="./icon-home.png"
        onClick={handleHome}
      />
      <DateForm {...props} />
      <Button
        type="primary"
        onClick={handleClick}
        style={{ backgroundColor: color, color: "black" }}
      >
        {phrase}
      </Button>
    </>
  );
}
