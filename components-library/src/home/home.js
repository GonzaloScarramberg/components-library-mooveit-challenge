import React from 'react';
import { Link } from 'react-router-dom';

const homeStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '5 1 70%',
};

const Home = () => (
  <div style={homeStyles}>
    <h2>Components Library</h2> <h3>Implementation examples</h3>
    <Link to='/components-gallery'>
      <button type='button'>Get Started</button>
    </Link>
  </div>
);

export default Home;
