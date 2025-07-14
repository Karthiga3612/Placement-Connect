import React, { useState } from 'react';
import './StudentRegistration.css';

const StudentRegistration = ({ onRegister }) => {
  const [regNo, setStudentId] = useState('');
  const [stdName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDepartment] = useState('');
  const [batch, setAcademicYear] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password,cnfPassword);
    if (password !== cnfPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      regNo,
      stdName,
      email,
      dept,
      batch,
      password
    };

    try {
      const response = await fetch('http://localhost:8000/api/student/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      console.log('Registration successful:', result);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="heading">Student Registration</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="studentId" className="label">Register No:</label>
            <input type="text" id="studentId" className="input" value={regNo} onChange={(e) => setStudentId(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="studentName" className="label">Student Name:</label>
            <input type="text" id="studentName" className="input" value={stdName} onChange={(e) => setStudentName(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="label">Email:</label>
            <input type="email" id="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="department" className="label">Department:</label>
            <select id="department" className="input" value={dept} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="Electrical">Electrical</option>
              {/* Add more if needed */}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="academicYear" className="label">Batch:</label>
            <select id="academicYear" className="input" value={batch} onChange={(e) => setAcademicYear(e.target.value)}>
              <option value="">Select Batch</option>
              <option value="2021-2025">2021-2025</option>
              <option value="2022-2026">2022-2026</option>
              <option value="2023-2027">2023-2027</option>
              <option value="2024-2028">2024-2028</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">Password:</label>
            <input type="password" id="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
            <input type="password" id="confirmPassword" className="input" value={cnfPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;