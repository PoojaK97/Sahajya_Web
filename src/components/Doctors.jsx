import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './Doctors.css';
import {coorD} from '../firebase';
export default class Doctors extends Component {
  constructor(props){
    super(props);
    this.ref = coorD.collection('Doctors');
    this.unsubscribe = null;
    this.state = {
      Doctors: [],
    };
  } 

  onCollectionUpdate = (querySnapshot) => {
    const Doctors = [];
    querySnapshot.forEach((doc) => {
      const { name, email, specialization } = doc.data();
      Doctors.push({
        key: doc.id,
        name,
        email,
        specialization
      });
    });
    this.setState({
      Doctors
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    
    return (
      <Grid>
        <Jumbotron>
          <h2>DOCTORS</h2>
        </Jumbotron>
        <Row className="show-grid text-center">
        {this.state.Doctors.map(doc =>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>{doc.name}</h3>
            <p><ul>
              <li>Email: {doc.email}</li>
              <li>Specialization: {doc.specialization}</li>
            </ul></p>
          </Col>
          )}
        </Row>
      </Grid>
    )
  }
}
