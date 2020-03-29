import React from 'react';
import MyMapComponent from './Components/MyMapComponent/MyMapComponent';
import mapdata from './Components/MyMapComponent/mapdata';

function App() {
  return (
    <MyMapComponent 
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHalmwu80S2TX8CenbyPQeQhOPdyaABZ8&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      mapdata={mapdata}  
    />
  );
};

export default App;
