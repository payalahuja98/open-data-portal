import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import heroImage from './static/Datathon Hero.png';
import MainLogo from './static/Logo + Type@2x.png'
import axios from 'axios';
import Moment from 'moment';
import Image from 'react-bootstrap/Image'

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


  componentDidMount() {
    var targetUrl = 'https://wp.stanforddaily.com/wp-json/wp/v2/posts?_embed&categories=58277' 
      // embed adds featured image

    axios.get(targetUrl)
      .then(result => {
        let stories = result.data.slice(0, 3);
        this.setState({
          isLoaded: true,
          articles: stories
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json')
      .then(result => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      /*.then(() => {
        let slugs = this.state.items.filter(dataset => dataset.stories !== "").slice(0, 3).map(dataset => dataset.stories);
        console.log(this.state.items);
        for (var i = 0; i < slugs.length; i++) {
          let multipleSlugs = slugs[i].split(",")
          for (var j = 0; j < multipleSlugs.length; j++) {
            targetUrl += '&slug[]=' + multipleSlugs[j];
          }
        }
        console.log(targetUrl);

        fetch(targetUrl)
        .then(blob => blob.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            articles: result,
          });
        },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      })*/
  }


  render() {
    function html_entity_decode(message) {
      /* decodes UTF8 punctuation into HTML */
      var element = document.createElement("div");
      element.innerHTML = message;
      return element.innerHTML;
    }

    return (
      <div className="home">
        <header>
          <div id='info'>
          </div>
        </header>
      </div>
    );
  }
}
