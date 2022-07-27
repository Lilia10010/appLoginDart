import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/login";
import GlobalStyles from "../src/styles/GlobalStyles";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
