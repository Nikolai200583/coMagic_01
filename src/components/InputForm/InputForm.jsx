export function InputForm() {
  return (
    <div className="container">
      <div className="drop">
        <div className="content">
          <h2 className="headerText">Log in</h2>
          <form action="#" className="form">
            <div className="inputbox">
              <input
                type="text"
                className="inputname"
                placeholder="User name"
              />
            </div>
            <div className="inputbox">
              <input type="email" className="inputpass" placeholder="Mail" />
            </div>
            <div className="inputbox">
              <input type="submit" className="inputsubmit" value="Enter" />
            </div>
          </form>
        </div>
      </div>

      <div id="btn1" className="btns hidden">
        User name, please!
      </div>
      <div id="btn2" className="btns signup hidden">
        Password, please!
      </div>
    </div>
  );
}
