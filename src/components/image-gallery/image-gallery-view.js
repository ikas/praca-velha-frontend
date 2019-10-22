import React from 'react';
import Gallery from 'react-grid-gallery'

export default props => <Gallery
  backdropClosesModal={true}
  enableImageSelection={false}
  rowHeight={200}
  margin={4}
  {...props}
/>
