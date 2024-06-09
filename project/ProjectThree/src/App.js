import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from "./components/Navbar";
import Blogs from "./routes/blogs";
import Login from "./components/login";
import About from "./routes/about";
import SignUp from "./components/signup";
import Contact from './routes/contact';
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import Footer from './components/footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <ThemeToggle darkMode={darkMode} onToggle={handleThemeChange} />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
