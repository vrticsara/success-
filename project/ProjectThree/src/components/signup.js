import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import Notification from './notification';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ open: false, message: '', type: '' });

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = formData.username ? "" : "Username is required.";
    tempErrors.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.email) ? "" : "Email is not valid.";
    tempErrors.password = formData.password.length > 5 ? "" : "Password must be at least 6 characters long.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('user', JSON.stringify(formData));
      setNotification({ open: true, message: 'Sign up successful', type: 'success' });
    } else {
      setNotification({ open: true, message: 'Sign up failed', type: 'error' });
    }
  };

  const handleNotificationClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            margin="normal"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">Sign Up</Button>
        </form>
      </Box>
      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={handleNotificationClose}
      />
      <Box mt={2}>
          <Typography>
            Have have an account? <Link href="/login">Login</Link>
          </Typography>
        </Box>
    </Container>
  );
};

export default SignUp;
