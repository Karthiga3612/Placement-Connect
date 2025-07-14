import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Card, CardContent, Container, Box } from '@mui/material';

function AdminRegistration() {
  const [adminId, setAdminId] = useState('');
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/admin/register', {
        adminId,
        adminName,
        email,
        password
      });

      setMessage(response.data.message); // Success message
      setAdminId('');
      setAdminName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Card sx={{ padding: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Admin Registration
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              label="Admin ID"
              variant="outlined"
              fullWidth
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              label="Admin Name"
              variant="outlined"
              fullWidth
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              required
              margin="normal"
            />
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

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Register
            </Button>

            {message && (
              <Typography color="success.main" sx={{ mt: 2 }}>
                ✅ {message}
              </Typography>
            )}
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                ❌ {error}
              </Typography>
            )}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AdminRegistration;
