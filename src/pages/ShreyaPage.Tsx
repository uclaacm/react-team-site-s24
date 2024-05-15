import React from 'react'
import { Link } from 'react-router-dom';

const ShreyaPage = () => {
    return (
        <div style={pageStyle}>
            <h1>Hello! This is Shreya's Page!</h1>
            <div style={containerStyle}>
            <div style={contentStyle}>
                <h2>Silly Shreya Facts</h2>
                <p><strong>Home Town:</strong> Arcadia__But I went to Temple City High School__</p>
                <p><strong>Major:</strong>Mechanical Engineering</p>
                <p><strong>A Fun Fact:</strong> I like purple haha </p>
                <Link to="/" style={buttonStyle}>Back to home page</Link>
            </div>
            </div>
        </div>
    )
};

const PageStyle = {
padding: '20x',
backgroundColor: '#CDB4DB'
};

const containerStyle = {
backgroundColor: '#fff',
};

const contentStyle = {
    color: '#444',
    marginTop: '20px',
};