import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '85vh'
};

const center = {
  lat: 0,
  lng: 0
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAwlP5ZvmzczVrZzAwJuEGL1myZUN9cHXE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {/* Child components, such as markers, go here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
