import React from "react";
import StudentPage from "./pages/StudentPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Signup from "./pages/Signup";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <StudentPage />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<StudentPage />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
