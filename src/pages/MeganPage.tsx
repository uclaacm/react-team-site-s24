import React from 'react';
import { Link } from 'react-router-dom';
import megImage from '../assets/images/meg.jpg';

const MeganPage = () => {
    return (
        <div style={pageStyle}>
          <h1>Welcome to Megan's Page</h1>
          <div style={containerStyle}>
            <img src={megImage} alt="Megan" style={imageStyle} />
            <div style={contentStyle}>
              <h2>Facts About Megan</h2>
              <p><strong>Home Town:</strong> Bay Area</p>
              <p><strong>Major:</strong> CS! </p>
              <p><strong>Fun Fact:</strong> I'm a red velvet cake fiend</p>
              <Link to="/" style={buttonStyle}>Back to home page</Link>
            </div>
          </div>
        </div>
      );
};

export default MeganPage


const pageStyle = {
    padding: '20px',
    backgroundColor: '#D3D3FF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Garamond, serif',
  };
  
  const containerStyle = {
    backgroundColor: '#fff',
    width: '40%', 
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  };
  
  const imageStyle = {
    width: '200px',
    height: 'auto',
    borderRadius: '8px',
    border: '5px solid #333',
  };
  
  const contentStyle = {
    color: '#333',
    marginTop: '20px',
  };
  
  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
  };
  