import { createBrowserRouter } from "react-router";

import RegistrationForm from "../components/section-layout/RegistrationForm";
import FindAccount from "../pages/FindAccount";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/registrationform", element: <RegistrationForm /> },
  { path: "/login", element: <Login /> },
  { path: "/findaccount", element: <FindAccount /> },
]);
