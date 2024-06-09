import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import "../styles/Theme.css";

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="theme-toggle">
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={onToggle} />}
        label="Dark Mode"
        labelPlacement="start"
      />
    </div>
  );
};

export default ThemeToggle;
