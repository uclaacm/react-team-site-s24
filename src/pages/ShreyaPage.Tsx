import React from 'react';
import { Link } from 'react-router-dom';
 import ShreyaImage from '../assets/images/img.png';

const ShreyaPage = () => {
    return (
        <div style={pageStyle}>
            <h1>Hello! This is Shreya's Page!</h1>
            <div style={containerStyle}>
             <img src={ShreyaImage} alt="Shreya" style={imageStyle} /> 
            <div style={contentStyle}>
                <h2>Silly Shreya Facts</h2>
                <p><strong>Home Town:</strong> Arcadia, But I went to Temple City High School</p>
                <p><strong>Major:</strong> Mechanical Engineering</p>
                <p><strong>A Fun Fact:</strong> I like purple haha </p>
                <Link to="/" style={buttonStyle}>Back to home page</Link>
            </div>
            </div>
        </div>
    );
}

export default ShreyaPage;

const pageStyle = {
    padding: '20px',
    backgroundColor: '#CDB4DB', // https://coolors.co/palettes/trending
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Comic Sans MS',
  };
  
  const containerStyle = {
    backgroundColor: '#fefae0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  };
  
  const imageStyle = {
    width: '200px',
    height: 'auto',
  };
  
  const contentStyle = {
    color: '#023047',
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
  
// const pageStyle = {
// padding: '20x',
// backgroundColor: '#CDB4DB'
// };

// const containerStyle = {
// backgroundColor: '#CDB4DB',
// };

// const contentStyle = {
//     color: '#444',
//     marginTop: '20px',
// };

// const buttonStyle = {
//  marginTop:'30px',
//  padding: '10px 20px',
//  border: 'none',
//  borderRadius: '5px',
// };

// const imageStyle = {
//     width: '200px',
//     height: 'auto',
    
//   };