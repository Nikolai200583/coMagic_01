import { useNavigate } from "react-router-dom";
import { getColor } from "../../utils";
import { Button } from "antd";
import { DateForm } from "../../components/InputForm/DateForm";
import { useState } from "react";

export function CalendarLayout(props) {
  const navigate = useNavigate();
  const [color, setColor] = useState(null);
  const phrase = []
  function handleColor() {
    setColor(getColor());
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
      <Button type="primary" onClick={handleColor} style={{ backgroundColor: color}}>
        Волшебная кнопка
      </Button>
    </>
  );
}
