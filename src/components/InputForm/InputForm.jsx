import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";

InputForm.propTypes = {
  input: PropTypes.object,
  handleChangeInput: PropTypes.func
};

export function InputForm({ input, handleChangeInput }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    !input.name || !input.lastName
      ? alert("Все поля должны быть заполнены корректно")
      : navigate("/calendar");
  }
  return (
    <div className="container">
      <div className="drop">
        <div className="content">
          <h2 className="headerText">Log in</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="inputbox">
              <input
                type="text"
                name="name"
                value={input.name}
                className="inputname"
                placeholder="User name"
                onChange={(e) => handleChangeInput(e.target)}
              />
            </div>
            <div className="inputbox">
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                className="inputpass"
                placeholder="Last name"
                onChange={(e) => handleChangeInput(e.target)}
              />
            </div>
            <div className="inputbox">
              <input type="submit" className="inputsubmit" value="Enter" />
            </div>
          </form>
        </div>
      </div>
      {!input.name && <div className="btns">Enter name, please!</div>}
      {!input.lastName && (
        <div className="btns signup">Enter last name, please!</div>
      )}
    </div>
  );
}
