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
    !input.name || !input.textArea
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
                maxLength="18"
                name="name"
                value={input.name}               
                placeholder="User name"
                onChange={(e) => handleChangeInput(e.target)}
              />
            </div>
            <div className="inputbox">
              <textarea                
                name="textArea"
                maxLength="20"
                rows="1"
                value={input.textArea}   
                placeholder="Comment"                       
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
      {!input.textArea && (
        <div className="btns signup">Enter comment, please!</div>
      )}
    </div>
  );
}
