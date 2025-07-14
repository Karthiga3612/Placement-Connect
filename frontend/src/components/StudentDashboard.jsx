// src/components/StudentDashboard.jsx
import React from 'react';

const StudentDashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Course: {user.course}</p>
      <button onClick={() => alert('Logging out...')}>Logout</button>
    </div>
  );
};

export default StudentDashboard;
