import React from 'react';
import ComponentsGalleryItem from './components-gallery-item';

const ComponentsGallery = () => {
  const GalleryItems = [
    { id: 1, name: 'button', link: 'button-implementation' },
    {
      id: 2,
      name: 'input text',
      link: 'input-text-implementation',
    },
    {
      id: 3,
      name: 'input number',
      link: 'input-number-implementation',
    },
    {
      id: 4,
      name: 'select input',
      link: 'select-input-implementation',
    },
    {
      id: 5,
      name: 'autocomplete',
      link: 'autocomplete-implementation',
    },
  ];

  return (
    <div>
      <h2>Components Gallery</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          rowGap: '10px',
          flexFlow: 'wrap',
        }}
      >
        {GalleryItems.map((item) => (
          <ComponentsGalleryItem
            key={item.id}
            name={item.name}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentsGallery;
