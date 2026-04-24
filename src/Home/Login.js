import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, Snackbar, Alert } from '@mui/material';
import background from '../Images/palace.jpg'; 

const LoginForm = () => {
  const [open, setOpen] = useState(false); 
  const [email, setEmail] = useState(''); 
  const [isEmailValid, setIsEmailValid] = useState(true); 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if (emailRegex.test(email)) {
      console.log("Valid email:", email); 
      setIsEmailValid(true);
      setOpen(true); 
    } else {
      console.log("Invalid email:", email); 
      setIsEmailValid(false); 
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid item xs={12} md={4} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '8px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          error={!isEmailValid} 
          helperText={!isEmailValid ? "Please enter a valid email" : ""} 
        />
        
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        
        <Button variant="contained" color="warning" fullWidth onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Grid>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully submitted!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default LoginForm;
