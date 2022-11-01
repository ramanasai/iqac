import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import SignUp from "./components/signup.component";
import { Header } from "./pages";
import RegisterPage from "./pages/RegisterPage";
import ForgotPass from "./pages/ForgotPass";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App flex-row">
        <Header className="sticky top-0 flex md:absolute " />
        <div className="">
          <div className="auth-inner">
            <Routes className="p-10 justify-center items-center content-cente">
              <Route path="/" element={<HomePage />} />
              {/* <Route exact path="/" element={<LoginPage />} /> */}
              <Route exact path="/sign-in" element={<LoginPage />} />
              <Route path="/sign-up" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPass />} />
              {/* <Route path="/sign-up" element={<SignUp />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
