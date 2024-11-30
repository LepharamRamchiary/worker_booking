import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
