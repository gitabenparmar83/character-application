import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./app/components/Header";
import InputAdornments from "./app/components/Search";
import Home from "./app/pages/home";
import Profile from "./app/pages/profile";
import Search from "./app/pages/search";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <InputAdornments />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:cardId" element={<Profile />} />
          <Route path="/search/:filter/:value" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
