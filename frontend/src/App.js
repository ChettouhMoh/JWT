import Homepage from "@pages/Homepage";
import "./App.css";
import SignUp from "@components/sign-up/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/sign-in/SignIn";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
