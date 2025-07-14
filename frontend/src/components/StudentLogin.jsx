import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, CircularProgress, Container, Typography, Box, Card, CardContent } from '@mui/material';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:3001/api/student-login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/student-dashboard'); // Redirect to student dashboard
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to bottom,rgb(18, 18, 19),rgb(227, 229, 231))', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Container maxWidth="xs">
        <Card sx={{ width: '100%', padding: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Student Login
            </Typography>
            <form onSubmit={handleLogin} style={{ width: '100%' }}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                margin="normal"
              />
              {error && <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>{error}</Typography>}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                disabled={loading} // Disable the button while loading
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
              </Button>
            </form>

            <Box sx={{ marginTop: 2, textAlign: 'center' }}>
              <Typography variant="body2">
                Don't have an account? <Link to="/register" style={{ color: '#2f80ed', fontWeight: 'bold' }}>Register</Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default StudentLogin;
