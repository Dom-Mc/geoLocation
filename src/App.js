import React from 'react';
import { Button } from 'semantic-ui-react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LocationDisplay from './Components/LocationDisplay';
import MapData from './Components/MapData';
import Navbar from './Components/Navbar';

export default class App extends React.Component {
  state = {
    domainLocationData: '',
    userLocationData: '',
    error: false
  }

  handleError = () => {
    this.state({
      error: true
    });
  }

  getDomainLocation = (query) => {
    const url = 'http://ip-api.com/json/' + query;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          domainLocationData: data
        });
      });
  }

  getUserLocation = () => {
    const url = 'http://ip-api.com/json/';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          userLocationData: data
        });
      });
  }

  clearUserLocation = () => {
    this.setState({
      userLocationData: ''
    });
  }

  displayMap = () => {
    const domainData = this.state.domainLocationData;
    const userData = this.state.userLocationData;

    if(domainData || userData) {
      return (
        <MapData
          domain={domainData}
          user={userData}
          className="map-container zoo"
        />
      );
    } else {
      return null;
    }
  }

  displayUserData = () => {
    const userData = this.state.userLocationData;

    if (userData) {
      return <LocationDisplay locationCategory={userData} />;
    } else {
      return null;
    }
  }

  render() {
    const map = this.displayMap();
    const userData = this.displayUserData();

    return (
      <div>
        <Navbar />
        <main className="page-content--wrap">
          <div className="background-image">
            <Header domainQuery={this.getDomainLocation} />
            <div id="map">
              {map}
            </div>
          </div>

          <div className="content-container">
            <section id="user-location" className="section-padding user">
              <h2 className="section-headline--user">
                Find your estimated geolocation
              </h2>

              {userData}
              <div className="button-group">
                <Button onClick={this.getUserLocation} size="large">
                  My location
                </Button>
                <Button onClick={this.clearUserLocation} size="large">
                  Reset location
                </Button>
              </div>

            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

MapData.propTypes = {
  domainLocationData: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  userLocationData: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
};
