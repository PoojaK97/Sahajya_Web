import React, { Component } from 'react';
import { Grid, Row, Col, Image, Jumbotron, Tab, Tabs } from 'react-bootstrap';
import './Volunteers.css';
import {coorD} from '../firebase';

export default class Volunteers extends Component {
  constructor(props){
    super(props);
    this.ref = coorD.collection('Volunteers');
    this.unsubscribe = null;
    this.state = {
      Volunteers: [],
      Volunteers1: [],
      Volunteers2: [],
    };
  }  
  onCollectionUpdate = (querySnapshot) => {
    const Volunteers = [];
    const Volunteers1 = [];
    const Volunteers2 = [];
    querySnapshot.forEach((doc) => {
      const { name, age, gender, contact, email, camp_preference } = doc.data();
      Volunteers.push({
        key: doc.id,
        name,
        age,
        gender,
        contact,
        email,
        camp_preference
      });
    });
    this.setState({
      Volunteers
   });
   querySnapshot.forEach((doc) => {
    const { name, age, gender, contact, email, camp_preference } = doc.data();
    if (camp_preference == "Relief Camp 1") {
    Volunteers1.push({
      key: doc.id,
      name,
      age,
      gender,
      contact,
      email,
      camp_preference
    });
  }
  });
  this.setState({
    Volunteers1
 });
 querySnapshot.forEach((doc) => {
  const { name, age, gender, contact, email, camp_preference } = doc.data();
  if (camp_preference == "Relief Camp 2") {
  Volunteers2.push({
    key: doc.id,
    name,
    age,
    gender,
    contact,
    email,
    camp_preference
  });
}
});
this.setState({
  Volunteers2
});
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    return (
      <Grid>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="All">
        <Jumbotron>
          <h2>ALL VOLUNTEERS</h2>
        </Jumbotron>
        <Row className="show-grid text-center">
        {this.state.Volunteers.map(vol =>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>{vol.name}</h3>
            <p><ul>
              <li>Age: {vol.age}</li>
              <li>Gender: {vol.gender}</li>
              <li>Contact: {vol.contact}</li>
              <li>Email: {vol.email}</li>
              <li>Camp_reference: {vol.camp_preference}</li>
            </ul></p>
          </Col>
          )}
        </Row>
        </Tab>
            <Tab eventKey={2} title="Chennai">
            <Jumbotron>
              <h2>VOLUNTEERS in CHENNAI</h2>
            </Jumbotron>
            <Row className="show-grid text-center">
            {this.state.Volunteers1.map(vol =>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>{vol.name}</h3>
            <p><ul>
              <li>Age: {vol.age}</li>
              <li>Gender: {vol.gender}</li>
              <li>Contact: {vol.contact}</li>
              <li>Email: {vol.email}</li>
            </ul></p>
          </Col>
          )}
            </Row>
            </Tab>

            <Tab eventKey={4} title="Coorg">
            <Jumbotron>
              <h2>VOLUNTEERS in COORG</h2>
            </Jumbotron>
            <Row className="show-grid text-center">
            {this.state.Volunteers2.map(vol =>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>{vol.name}</h3>
            <p><ul>
              <li>Age: {vol.age}</li>
              <li>Gender: {vol.gender}</li>
              <li>Contact: {vol.contact}</li>
              <li>Email: {vol.email}</li>
            </ul></p>
          </Col>
          )}
            </Row>
            </Tab>

            </Tabs>
            </Grid>
        )
      }
  }
