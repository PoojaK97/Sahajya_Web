import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Carousel, Button, Media } from 'react-bootstrap';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    this.state = {
      index: 0,
      direction: 'next',
      interval: 1500,
      indicators: false,
      pauseOnHover: true,
      slide: true,
      wrap: true
    }
    return (
      <Grid>
        <Jumbotron>
          <h2>HEADLINES</h2>
        </Jumbotron>
        <Carousel
        direction={this.state.direction}
        onSelect={this.handleSelect}
        indicators={this.state.indicators}
        interval={this.state.interval}
        slide={this.state.slide}
        wrap={this.state.wrap}
        pauseOnHover={this.state.pauseOnHover}
        >
  <Carousel.Item>
    <img width={900} height={800} alt="Flood-hit Coorg" src={require('../Coorg.jpg')}  />
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={require('../Kerala.jpg')} />
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
  </Carousel.Item>
</Carousel>
        <Jumbotron>
    <Media>
    {/*<Media.Left>
      <img width={80} height={80} src="/thumbnail.png" alt="thumbnail" />
    </Media.Left>*/}
    <Media.Body>
      <Media.Heading>MUMBAI</Media.Heading>
        <p>
        Two toddlers were among 14 people killed in Mumbai after floods caused by heavy monsoon rains destroyed homes
and disrupted traffic in India’s financial capital, police said, but lighter-than-feared rain on Wednesday helped relief
efforts. At least 21 people are dead and more than a dozen others trapped after monsoon downpours
caused a building to collapse in Mumbai. The extreme rainfall on 29 August 2017 was forecasted by
the Indian Meteorological Department (IMD), five to six days in advance. However, the government failed
to respond quickly, leading to the crisis
        </p>
        <a href="https://timesofindia.indiatimes.com/articleshow/64920073.cms?utm_source=contentofinterest&amp;utm_medium=text&amp;utm_campaign=cppst" target="_blank">
            <Button bsStyle="primary">Read More</Button>
          </a>
      </Media.Body>
      </Media>
        </Jumbotron>
        <Jumbotron>
          <h2>Cyclones in Chennai</h2>
          <p>Four people were killed in Tamil Nadu on Monday as a tropical storm slammed into India’s southeastern coast with
monstrousferocity, uprooting trees and power cables, toppling vehicles and damaging houses besides dumping
heavy rain across two states. Cyclone Vardah made landfall close to the Chennai coast at about 3 pm and barrelled
inland, packing wind speed up to 140 kmph but is expected to lose intensity as it moves further inshore.
More than 9,000 people were evacuated to safety in the coastal regions of Tamil Nadu and Andhra Pradesh while
educational institutions were shut as the “very severe” cyclonic storm whipped up waves as high as 20 ft</p>
          <a href="https://www.hindustantimes.com/india-news/live-andhra-tamil-nadu-coasts-on-high-alert-as-cyclone-vardah-makes-landfall/story-3PiQLAzLXB9njQDhfTdPQI.html" target="_blank">
            <Button bsStyle="primary">Read More</Button>
          </a>
        </Jumbotron>
        <Jumbotron>
          <h2>Kerala Floods</h2>
          <p>Media call it the worst flood of the century in the region. After more than two weeks of relentless rain, Kerala, a state
at the southern tip of India, known internationally for its scenic green landscapes, touristic spots, and backwaters, is
left with over 1 million people in relief camps, and close to 400 reported dead—the number is expected to be much
higher as many areas remain inaccessible.
In the mountainous Coorg or Kodagu district in the neighbouring state of Karnataka, thousands of people have been
marooned because of torrential rains. Exacerbated by landslides in hilly terrain, flooding has led to the destruction of
homes, bridges, road networks, and industries.</p>
<a href="https://www.google.com/url?q=https://qz.com/india/1370367/in-kerala-and-kodagu-the-extreme-floods-were-foretold/&ust=1543744500000000&usg=AFQjCNGFWoI0TSZBvRD5mL8kZm-1q7eWpw&hl=en&source=gmail" target="_blank">
            <Button bsStyle="primary">Read More</Button>
          </a>
        </Jumbotron>
      </Grid>
    )
  }
}
