import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserFormLayout } from "./pages/userForm/UserFormLayout";
import { CalendarLayout } from "./pages/calendar/CalendarLayout";
import { NotFound } from "./pages/notFound/NotFound";
import "./global.css";
function App() {
  const [input, setInput] = useState({
    name: "",
    lastName: ""
  });
  function handleChangeInput(target) {
    setInput({ ...input, [target.name]: target.value });
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserFormLayout
              handleChangeInput={handleChangeInput}
              input={input}
            />
          }
        />
        <Route path="/calendar" element={<CalendarLayout input={input}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
