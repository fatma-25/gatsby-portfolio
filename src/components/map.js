import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 36.949711,
      lng: 10.099886
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.949711}
            lng={10.099886}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;