import React, { Component } from 'react'
import { Grid, Tab, Tabs, Table } from 'react-bootstrap';
import './DistressLocations.css';
import {coorD} from '../firebase';

export default class DistressLocations extends Component {
  constructor(props){
    super(props);
    this.ref = coorD.collection('DistressLocation');
    this.unsubscribe = null;
    this.state = {
      DistressLocation : [],
      DistressLocation1:[]
    };
  }  
  
  onCollectionUpdate = (querySnapshot) => {
    const DistressLocation = [];
    const DistressLocation1=[];
    const DistressLocation2=[];
    querySnapshot.forEach((doc) => {
     
      
      const { Latitude , Longitude , SOS ,Place } = doc.data();
    
      if(Place=="Chennai")
       {
        DistressLocation.push({
          key: doc.id,
          Latitude,
          Longitude,
          SOS,
          Place
        });
    }

  
    });
    this.setState({
      DistressLocation
   });

   querySnapshot.forEach((doc) => {
     
      
    const { Latitude , Longitude , SOS ,Place } = doc.data();
  
    if(Place=="Mumbai")
     {
      DistressLocation1.push({
        key: doc.id,
        Latitude,
        Longitude,
        SOS,
        Place
      });
  }


  });
  this.setState({
    DistressLocation1
 });
  
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <Grid>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Chennai">
        <Table striped bordered condensed hover id="table">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>SOS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DistressLocation.map(loc =>
            <tr>
              <td>{loc.Latitude}</td>
              <td>{loc.Longitude}</td>
              <td>{loc.SOS}</td>
            </tr>
            )}
          </tbody>
        </Table>
        </Tab>
        <Tab eventKey={2} title="Mumbai">
        <Table striped bordered condensed hover id="table">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>SOS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DistressLocation1.map(loc =>
            <tr>
              <td>{loc.Latitude}</td>
              <td>{loc.Longitude}</td>
              <td>{loc.SOS}</td>
            </tr>
            )}
          </tbody>
        </Table>
        </Tab>
        </Tabs>
      </Grid>
    )
  }
}