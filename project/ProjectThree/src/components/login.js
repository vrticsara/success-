import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Notification from './notification';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ open: false, message: '', type: '' });
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    const user = JSON.parse(localStorage.getItem('user'));
    tempErrors.email = user && user.email === formData.email ? "" : "Email is incorrect.";
    tempErrors.password = user && user.password === formData.password ? "" : "Password is incorrect.";
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
      setNotification({ open: true, message: 'Login successful', type: 'success' });
      navigate('/home');
    } else {
      setNotification({ open: true, message: 'Login failed', type: 'error' });
    }
  };

  const handleNotificationClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">Login</Typography>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
        <Box mt={2}>
          <Typography>
            Don't have an account? <Link href="/signup">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={handleNotificationClose}
      />
    </Container>
  );
};

export default Login;
