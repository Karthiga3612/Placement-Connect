import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './HomePage.css'; // Import the CSS for HomePage styling

const HomePage = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleLoginClick = (role) => {
    if (role === 'student') {
      navigate('/student-login'); // Navigate to Student Login page
    } else if (role === 'admin') {
      navigate('/admin-login'); // Navigate to Admin Login page
    }
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h1>Placement Details</h1>
        <div>
          <button onClick={() => navigate('/')} style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}>Home</button>
          <button onClick={() => handleLoginClick('student')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Student Login</button>
          <button onClick={() => handleLoginClick('admin')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Admin Login</button>
        </div>
      </nav>

      <Home />
    </div>
  );
};

const Home = () => {
  const placedStudents = [
    { id: 1, name: 'John Doe', company: 'Google', position: 'Software Engineer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MS8QVASobRp_NB956TsKM_bdcS5ZT_yp4A&s' },
    { id: 2, name: 'Jane Smith', company: 'Amazon', position: 'Data Scientist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X0OdfaWumbYopUqS0CwuhlKFbpcyLjeGtsKK6L9xzx_NtQrfY2wjdnuVULT05OldlZ0&usqp=CAU' },
    { id: 3, name: 'Mark Johnson', company: 'Facebook', position: 'UI/UX Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1k7zVchojzpKlOOGP30Olbj2kb1l7DDEBw&s' },
  ];

  return (
    <div className="home-page">
      <h1>Placed Students</h1>
      <div className="student-list">
        {placedStudents.map((student) => (
          <div key={student.id} className="student-card">
            <img src={student.image} alt={`${student.name}'s photo`} className="student-image" />
            <div className="student-details">
              <h2>{student.name}</h2>
              <p><strong>Company:</strong> {student.company}</p>
              <p><strong>Position:</strong> {student.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
