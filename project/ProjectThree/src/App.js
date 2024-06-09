import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./routes/home"; // Import your Home component
import Blogs from "./routes/blogs"; // Import your Blogs component

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
    </Router>
  );
}

export default App;
