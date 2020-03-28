import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button,  Well, Modal,Table} from 'react-bootstrap';
import './ReliefCamps.css';
import { coorD } from '../firebase'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 12.972442, lng: 77.580643 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);

export default class ReliefCamps extends Component {
  constructor(props, context) {
    super(props, context);
    this.ref = coorD.collection('Relief_Camp');
    this.unsubscribe = null;
    this.state = {
      Coordinate: [],
      show: false,
      latitude: '',
      longitude: '',
      pdCoordinates: []
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onCollectionUpdate = (querySnapshot) => {
    const Coordinate = [];
    querySnapshot.forEach((doc) => 
    {const {latitude, longitude, contact, name } = doc.data();
      Coordinate.push({
        key: doc.id,
        latitude,
        longitude,
        contact,
        name
      });
  });
    this.setState({
      Coordinate
   });
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  addMarker() {
    console.log('this.state', this.state);
    coorD.collection("Coordinates").add({latitude: this.state.latitude, longitude: this.state.longitude})
  }

  render() {
    return (
      <div>
      <Grid>
        <Jumbotron>
          <h2>RELIEF CAMPS</h2>
            <Button bsStyle="primary"
              onClick={this.handleShow}
            >Pin Drop Location</Button>
        </Jumbotron>
        
        <Table striped bordered condensed hover >
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Contact</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Coordinate.map(coor =>
            <tr>
              <td>{coor.latitude}</td>
              <td>{coor.longitude}</td>
              <td>{coor.contact}</td>
              <td>{coor.name}</td>
            </tr>
            )}
          </tbody>
        </Table>
          
        
        {/* <MapWithAMarker
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        /> */}
        <br></br>
        <p>Sorry, google maps won't run.</p>
        <p>
        To use Google Maps Platform, you need a project with a billing account and at least one Google Maps Platform API or SDK enabled. Visit Get Started with Google Maps Platform for full instructions.
        </p>
        <p>Following this uncomment the code for Map. You will be good to go!</p>
     
      </Grid>
     

      <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
            <Modal.Title>Pin Drop Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Enter the latitude and longitude for Drop Location</p>
      <input
        className="form-control"
        type="text"
        placeholder="Latitude"
        onChange={event => this.setState({latitude: event.target.value})}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Longitude"
        onChange={event => this.setState({longitude: event.target.value})}
      />
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button bsStyle="primary"
              onClick={() => this.addMarker()}
            >Add Drop Location</Button>
          </Modal.Footer>
      </Modal>
    </div>
      );
  }
}