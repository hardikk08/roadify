import React from 'react';
import {
  DistanceContainer,
  Row,
  Column,
  Container,
  CreationContainer,
  Image,
  Overlay,
  Text,
  InfoColumn,
  Info,
  InfoHeader,
  InfoPoints,
  CreationHeader,
} from './styles';
import GoogleMaps from '../../components/GoogleMaps';
import { Redirect } from 'react-router-dom';
// @ts-ignore
import InfiniteCarousel from 'react-leaf-carousel';

interface LoggingInProps {
  app ?: any; 
}

class Dashboard extends React.Component<LoggingInProps, {}> {
  componentDidMount() {
    if ( Object.entries(this.props.app.user).length <= 0 && !this.props.app.gettingLoginStatus) {
      this.props.app.getUserProfileRequest();
    };
  }
  render() {
    const { isLoggedIn, gettingLoginStatus, creationRequest, createPlaylistRequest, getTopArtistsRequest, topArtists, user } = this.props.app;
    return (
      <React.Fragment>
        { isLoggedIn && !gettingLoginStatus ?
          <Container>
            { !creationRequest ?
                <DistanceContainer>
                  <Row>
                    <Column>
                      <InfoColumn>
                        <Info>
                          <InfoHeader>We choose tracks based on:</InfoHeader>
                          <InfoPoints>
                            <i className="fa fa-check" aria-hidden="true" style={{marginRight:`5px`}}></i>  Your favourite tracks
                          </InfoPoints>
                          <InfoPoints>
                            <i className="fa fa-check" aria-hidden="true" style={{marginRight:`5px`}}></i>  Your favourite artists
                          </InfoPoints>
                          <InfoPoints>
                            <i className="fa fa-check" aria-hidden="true" style={{marginRight:`5px`}}></i>  Your favourite genres
                          </InfoPoints>
                        </Info>
                      </InfoColumn>
                    </Column>
                    <Column>
                      <GoogleMaps
                        userSpotifyId= {user.id}
                        createPlaylistRequest={createPlaylistRequest}
                        getTopArtistsRequest={getTopArtistsRequest}
                      />
                    </Column>
                  </Row>
                </DistanceContainer>
              : <CreationContainer>
                  <CreationHeader>
                    { 
                      Object.entries(this.props.app.createdPlaylist).length > 1 ?
                        <h4>Hurray! We have created your h4laylist,
                          <a rel="nofollow noopener noreferrer" target="_blank" href={this.props.app.createdPlaylist.external_urls.spotify} style={{marginLeft: `${5}px`}}>
                            {this.props.app.createdPlaylist.Name}
                          </a>
                        </h4>
                      : <h4>We are making a playlist that contains songs from your favourite artists, albums & genres, hold on...</h4>
                    }
                  </CreationHeader>
                  <InfiniteCarousel
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={7}
                    slidesToShow={6}
                    scrollOnDevice={true}>
                    { topArtists.map((x: any) => (
                      <div key={x.Uri}>
                        <a href={x.external_urls.spotify} rel="nofollow noopener noreferrer" target="_blank">
                          <Image src={x.images[2].url} alt=""></Image>
                          <Overlay>
                            <Text>{x.name}</Text>
                          </Overlay>
                        </a>
                      </div>
                      ))
                    }
                  </InfiniteCarousel>
                </CreationContainer>}
          </Container>
        : <Redirect to="/"/>
        }
      </React.Fragment>
    )
  }
}

export default Dashboard;