import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

import React, { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        initialCenter={{ lat: 37.574791, lng: 126.979154 }}
      >
        <Marker
          onClick={() => window.open("https://goo.gl/maps/3HzjSVnGfdA1nYCv8")}
          title={
            "서울특별시 종로구 종로1길 50, 비동 2층(중학동, 더케이트윈타워)"
          }
          name={"WorldBestPartners"}
          position={{ lat: 37.574791, lng: 126.979154 }}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDKbjjUwIRNfRR933yEQ4UoL-EtlocgXbw"
})(MapContainer);
