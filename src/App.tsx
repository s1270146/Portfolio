import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diary from './pages/Diary';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Research from './pages/Research';
import Works from './pages/Works';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/works"} element={<Works />} />
        <Route path={"/diary"} element={<Diary />} />
        <Route path={"/research"} element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
