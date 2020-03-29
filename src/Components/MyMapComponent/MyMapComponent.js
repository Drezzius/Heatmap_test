import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  const handleClick = (cases) => console.log(cases)
  
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 48.78232, lng: 9.17702 }}
    >
      {props.mapdata.map(data =>
          <Circle key={data.id}
            center={{
                lat: data.lat,
                lng: data.lng
            }}
            options={{
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                clickable: true,
                draggable: false,
                editable: false,
                visible: true,
                radius: data.cases * 10,
                zIndex: 1
            }} 
            onClick={() => handleClick(data.cases)}
          />
      )}
    </GoogleMap> )
}))

export default MyMapComponent;
