import React from "react";
import StudentPage from "./pages/StudentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <StudentPage />
    </BrowserRouter>
  );
};

export default App;
