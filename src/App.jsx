import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserFormLayout } from "./pages/userForm/UserFormLayout";
import { CalendarLayout } from "./pages/calendar/CalendarLayout";
import { NotFound } from "./pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserFormLayout />} />
        <Route path="/calendar" element={<CalendarLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
