import React from 'react';
import { Container, TextInput, Go } from './styles';

declare var google: any;

interface GoogleMapsProps {
  createPlaylistRequest: Function;
  getTopArtistsRequest: Function;
  userSpotifyId: string;
}

interface GoogleMapsState {
  fromPlace: any;
  toPlace: any;
  placeParams: any;
  options: any;
  fromPlaceName: string;
  toPlaceName: string;
}

class GoogleMaps extends React.Component<GoogleMapsProps, GoogleMapsState > {
  constructor (props: any) {
    super(props);
    this.state = {
        fromPlace: {lat: null, lng: null},
        fromPlaceName: "",
        toPlace: {lat: null, lng: null},
        toPlaceName: "",
        placeParams: ['geometry', 'address_components', 'name'],
        options: {
            types: []
        }
    };
  }

  getFromPlace () {
    const fromElement = document.getElementById('from-destination');
    const fromAutoComplete = new google.maps.places.Autocomplete(fromElement, this.state.options);
    fromAutoComplete.setFields(this.state.placeParams);
    fromAutoComplete.addListener('place_changed', () => {
      // Extract City From Address Object
      const place = fromAutoComplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      this.setState({
          fromPlace: {lat, lng},
          fromPlaceName: place.name
      });
    });
  }

  getToPlace () {
    const toElement = document.getElementById('to-destination');
    const toAutoComplete = new google.maps.places.Autocomplete(toElement, this.state.options);
    toAutoComplete.setFields(this.state.placeParams);
    toAutoComplete.addListener('place_changed', () => {
      // Extract City From Address Object
      const place = toAutoComplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      this.setState({
          toPlace: {lat, lng},
          toPlaceName: place.name
      });
    });
  }

  mountGoogleDirections () {
    let time: number = 0; 
    const distanceMatrix = new google.maps.DistanceMatrixService();
    distanceMatrix.getDistanceMatrix(
    {
      origins: [new google.maps.LatLng(this.state.fromPlace)],
      destinations: [new google.maps.LatLng(this.state.toPlace)],
      travelMode: google.maps.TravelMode.DRIVING
    }, (response: any, status: any) => {
      if(!status) {
        alert("Can't provide distance!");
        return;
      }
      // console.log("Distance: ", response.rows[0].elements[0].distance.text);
      // console.log(response.rows[0].elements[0].duration.value);
      time = response.rows[0].elements[0].duration.value;
      const title = `Tripify: ${this.state.fromPlaceName || 'n.a'} - ${this.state.toPlaceName || 'n.a.'}`
      const id = this.props.userSpotifyId;
      this.props.getTopArtistsRequest();
      this.props.createPlaylistRequest({time, title, id});
    });

  }

  componentDidMount () {
    this.getFromPlace();
    this.getToPlace();
  }

  render() {
    return (
      <Container className="google-places-container">
        <TextInput type="text" style={{margin: `10px`}} id="from-destination" placeholder="From" />
        {/* <i className="fa fa-map-marker" aria-hidden="true" style={{marginRight:`5px`}}></i> */}
        <TextInput type="text" style={{margin: `10px`}} id="to-destination" placeholder="To" />
        <Go
          style={this.state.toPlaceName && this.state.fromPlaceName ? {display: 'block'} : {display: 'none'} }
          onClick={() => this.mountGoogleDirections()}>
          <i className="fa fa-2x fa-arrow-circle-right" aria-hidden="true"></i>
        </Go>
      </Container>
    )
  }
}

export default GoogleMaps;