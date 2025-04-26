import "./App.css";
import RegistrationForm from "./components/section-layout/RegistrationForm";
import FindAccount from "./pages/FindAccount";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* Wrap everything with Router */}
        <div>
          {/* Define your routes using Routes */}
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            {/* Home page */}
            {/* <Route
              path="/about"
              element={<About />} */}
            />
            {/* About page */}
            <Route
              path="/signup"
              element={<SignUp />}
            />
            <Route
              path="/registrationform"
              element={<RegistrationForm />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/findaccount"
              element={<FindAccount />}
            />
            {/* About page */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
