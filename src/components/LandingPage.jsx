import React from 'react';
import './styles.css';
import uiuc_home from './uiuc_home.jpg';
import Image from 'react-bootstrap/Image'
import books from "./Datasets.json";
import SearchBar from "./Search.js";

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
        <Image id='img'
          src={uiuc_home} 
          alt="Picture of University Campus"
          fluid 
        />
        <div class="text-block">
            <h4>University of Illinois at Urbana-Champaign</h4>
            <p>Open Data Portal</p>
        </div>
        <div class="search">
        <SearchBar
          
        />
        </div>
      </div>
    );
  }
}
