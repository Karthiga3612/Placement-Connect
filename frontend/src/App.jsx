import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration';
import StudentDashboard from './components/StudentDashboard';
import StudentRegistration from './components/StudentRegistration';

const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', password: '12345', course: 'Computer Science' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', password: '12345', course: 'Mathematics' }
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegister = (newUser) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', padding: 0 }}>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/student-login" style={{ color: '#fff', textDecoration: 'none' }}>Student Login</Link></li>
            <li><Link to="/student-registration" style={{ color: '#fff', textDecoration: 'none' }}>Student Registration</Link></li>
            <li><Link to="/admin-login" style={{ color: '#fff', textDecoration: 'none' }}>Admin Login</Link></li>
            <li><Link to="/admin-registration" style={{ color: '#fff', textDecoration: 'none' }}>Admin Registration</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/student-login" element={<StudentLogin registeredUsers={registeredUsers} setCurrentUser={setCurrentUser} />} />
            <Route path="/" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/student-dashboard" element={<h1>Student Dashboard</h1>} /> {/* Replace with actual dashboard */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-registration" element={<AdminRegistration />} />
            <Route 
              path="/student-dashboard" 
              element={
                currentUser ? (
                  <StudentDashboard user={currentUser} />
                ) : (
                  <div>
                    <h2>Access Denied</h2>
                    <p>Please log in to access your dashboard.</p>
                    <Link to="/student-login">Go to Student Login</Link>
                  </div>
                )
              } 
            />
            <Route path="/student-registration" element={<StudentRegistration onRegister={handleRegister} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;