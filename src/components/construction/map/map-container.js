import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default class ConstructionMapContainer extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyClJe3o_eqRfd_5roc72kYNCR0CieFA_OQ">
        <GoogleMap
          mapContainerStyle={{ height: "500px" }}
          center={{ lat: this.props.lat, lng: this.props.lng }}
          zoom={16}
          clickableIcons={false}
        >
          <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
        </GoogleMap>
      </LoadScript>
    );
  }
}