import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps'

class Maps extends React.Component {
  render = () => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
        >
      </GoogleMap>
    )
  }
}

const Map = withScriptjs(withGoogleMap(Maps))

export default () => (
  <Map
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAg3gyl1n_zcZDvmG9CREbN2h4bxbBsxA4"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px`, width: '500px' }} />}
  mapElement={<div style={{ height: `100%` }} />}
  />
)