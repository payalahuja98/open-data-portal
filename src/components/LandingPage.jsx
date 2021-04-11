import React from 'react';
import './styles.css';
import uiuc_home from './uiuc_home.jpg';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import landing1 from "./landing1.PNG"
import landing2 from "./landing2.PNG"
import landing3 from "./landing3.PNG"

export default class LandingPage extends React.Component {
  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      articles: [],
    };
  }

  render() {
    return (
      <div className="info">
        <div class="text-block">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={landing1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Research & Development Expenditures</h3>
              <p>Our university is among the most innovative in the world and receive more National Science Foundation grant dollars than any other research institution. </p>
            </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={landing2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Enrollment Data</h3>
                    <p>Our enrollment has grown nearly twenty percent in the last ten years.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={landing3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Innovation Transfer & Startups</h3>
                    <p>Ranked in the top 20 worldwide in number of patents granted to universities, we don’t stop after the research is done.</p>
                  </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      </div>
      </div>
    );
  }
}
