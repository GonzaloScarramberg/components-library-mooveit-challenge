import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ComponentsGalleryItem = ({ name, link }) => (
  <div
    style={{
      background: '#DEDBDA',
      flex: '0 0 210px',
      height: '210px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h2>{name}</h2>
    <Link to={link}>
      <button type='button'>Go to demonstration</button>
    </Link>
  </div>
);

ComponentsGalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ComponentsGalleryItem;
