// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Navbar from "./components/NavBar";
import ViewPage from "./components/ViewPage";
import ProgrammingModule from "./components/ProgrammingModule";
import ClubsModule from "./components/ClubsModule";
import AssosicationModule from "./components/AssosicationModule";
import LiteratureModule from "./components/LiteratureModule";
import Footer from "./components/footer";
import LoginPage from "./components/LoginPage"; // Import LoginPage
import { useState, useEffect } from "react"; // Import useState
import "./Appview.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Home from "./components/Home";
import { useRoutes } from "react-router-dom";

//programming module

// import ReactDOM from "react-dom/client";
import Header from "../src/components/programming/components/Header";
import Homepage from "../src/components/programming/components/Home";
// import Body from "./components/Body.js";
import Footer_P from "../src/components/programming/components/Footer";
import Question from "../src/components/programming/components/Questions.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "../src/components/programming/components/Error.js";
import Register from "../src/components/programming/components/Register.js";
import Login from "../src/components/programming/components/Login.js";
// import CreateAccount from "./components/createAccount.js";
import SignUp from "../src/components/programming/components/SignUp.js";

const Navigation = ({ isLoggedIn, logout }) => {
  const navigate = useNavigate(); // Get navigate function

  return isLoggedIn ? (
    <button onClick={logout}>Logout</button> // Show logout button when logged in
  ) : (
    <button onClick={() => navigate("/login")}>Login</button> // Show login button when logged out
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  ); // Get login status from localStorage

  useEffect(() => {
    // Update localStorage whenever isLoggedIn changes
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  // Load login status from local storage
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(savedLoginStatus === "true");
  }, []);

  // Save login status to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const logout = () => {
    setIsLoggedIn(false);
  };
  // Rest of your component

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} logout={logout} />
      <div className="routes-main">
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/viewpage" element={<ViewPage />} />
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/programming"
            element={
              isLoggedIn ? <ProgrammingModule /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/clubs"
            element={isLoggedIn ? <ClubsModule /> : <Navigate to="/login" />}
          />
          <Route
            path="/association"
            element={
              isLoggedIn ? <AssosicationModule /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/literature"
            element={
              isLoggedIn ? <LiteratureModule /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/questions"
            element={
              <AppLayout>
                <Route index element={<Question />} />
              </AppLayout>
            }
          />
          <Route
            path="/login_p"
            element={
              <AppLayout>
                <Route index element={<Login />} />
              </AppLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AppLayout>
                <Route index element={<Register />} />
              </AppLayout>
            }
          />
          <Route
            path="/create-account"
            element={
              <AppLayout>
                <Route index element={<SignUp />} />
              </AppLayout>
            }
          />
        <Route path="/" element={<Navigate to="/home" replace />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;