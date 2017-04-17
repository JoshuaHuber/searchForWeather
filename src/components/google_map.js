import React, {Component} from 'react';

class GoogleMap extends Component{
  //this.refs.map  refrenct to this exact div
  //life cycle methods called automaticly after we load this component
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 11,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render(){
    return <div ref='map' />
  }
}
export default GoogleMap;
