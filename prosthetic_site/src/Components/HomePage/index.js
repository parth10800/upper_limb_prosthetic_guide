import React, { Component } from 'react';
import NavBar from "../navbar";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const HomePage = () => {
    // return (
    //     <div>
    //         <NavBar/>
    //         <h1>hELLO from UppLimbProsGuide</h1>
    //     </div>
    // )
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAg3gyl1n_zcZDvmG9CREbN2h4bxbBsxA4"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            //mapContainerStyle={}
            center={5}
            zoom={30}
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
export default HomePage


