import React from 'react';

const headerStyles = {
  backgroundColor: '#0C0A3E',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
};

const Header = () => (
  <div style={headerStyles}>
    <span style={{ color: 'white' }}>Header</span>
  </div>
);

export default Header;
