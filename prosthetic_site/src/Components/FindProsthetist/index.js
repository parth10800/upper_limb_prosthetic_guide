import React, { Component } from 'react';
import NavBar from "../navbar";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const FindProsthetist = () => {
//     return (
//         <div>
//             <NavBar/>
//         </div>
//     )
// }
// export default FindProsthetist

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function FindProsthetist() {

    
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAg3gyl1n_zcZDvmG9CREbN2h4bxbBsxA4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <div>
            <NavBar/>
         </div>
        <></>
      </GoogleMap>
  ) : <></>

  
}

export default React.memo(FindProsthetist)