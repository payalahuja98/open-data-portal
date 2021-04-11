import React from 'react';
import axios from 'axios';
import './styles.css';
import Fuse from "fuse.js";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { AiOutlineCheckCircle, AiOutlineFileExcel} from 'react-icons/ai';
import { GrDocumentCsv } from "react-icons/gr";

const typeOptions = [
  { value: 'Administrative & Finance', label: 'Administrative & Finance' },
  { value: 'Education', label: 'Education' },
  { value: 'Environment', label: 'Environment' },
  { value: 'Public Safety', label: 'Public Safety' },
];

const industryOptions = [
  { value: 'geospatial', label: 'Geospatial' },
  { value: 'categorial', label: 'Categorial' },
  { value: 'numerical', label: 'Numerical' },
];

const sortOptions = [
  {value: 'alphabetical', label: 'A-Z'},
  {value: 'reverse', label: 'Z-A'},
  {value: 'date', label: 'Date (Newest First)'},
  {value: 'reverse-date', label: 'Date (Oldest First)'}
]

const fileFormatOptions = [
  {value: 'csv', label: 'CSV file'},
  {valie: 'excel', label: 'Excel file'}
]

class Datasets extends React.Component {
  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      filteredItems: [],
      locationFilter: [],
      n_datasets: 0,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSortBy = this.handleSortBy.bind(this)
  }

  handleChange(val) {
    var filteredItems = [];
    if (!val) { // if an element is unselected (small X), so the value is null...
      filteredItems = this.state.items;
    }
    else if (val.length === 0) {  // if all selections are cleared (the big X is clicked)...
      filteredItems = this.state.items; // reset items

    }
    else { 
      //val is the set of filters
      const vals = val.map((v) => v.value);
      let items = this.state.items;
      let final = (vals === undefined || vals.length === 0) ? items :
      items.filter((post) => {
        return vals.includes(post.tags);
      });
      filteredItems = final;
    }
    this.setState(
      { filteredItems: filteredItems,
      });
  }

  handleSortBy(val) {
    let sortby = val.value;
    let sortedItems = [...this.state.items];
    let fsortedItems = [...this.state.filteredItems];
    if (sortby === 'alphabetical') {
      sortedItems.sort((p, q) => (p.display_name > q.display_name) ? 1 : (q.display_name > p.display_name) ? -1 : 0);
      fsortedItems.sort((p, q) => (p.display_name > q.display_name) ? 1 : (q.display_name > p.display_name) ? -1 : 0);
    }
    else if (sortby === 'reverse') {
      sortedItems.sort((p, q) => (p.display_name > q.display_name) ? -1 : (q.display_name > p.display_name) ? 1 : 0);
      fsortedItems.sort((p, q) => (p.display_name > q.display_name) ? -1 : (q.display_name > p.display_name) ? 1 : 0);
    }
    else if (sortby === 'date') {
      sortedItems.sort((p, q) => (Date.parse(q.create_date) - Date.parse(p.create_date)));
      fsortedItems.sort((p, q) => (Date.parse(q.create_date) - Date.parse(p.create_date)));
    }
    else if (sortby === 'reverse-date') {
      sortedItems.sort((p, q) => (Date.parse(p.create_date) - Date.parse(q.create_date)));
      fsortedItems.sort((p, q) => (Date.parse(p.create_date) - Date.parse(q.create_date)));
    }
    this.setState({items: sortedItems});
    this.setState({filteredItems: fsortedItems});
  }

  componentDidMount() {
    axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json')
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.data.sort((p, q) => (Date.parse(q.create_date) - Date.parse(p.create_date))),
          filteredItems: result.data.sort((p, q) => (Date.parse(q.create_date) - Date.parse(p.create_date))),
        });
        //console.log(result.data)
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  searchKey = (e) => {
    const term = e.target.value;
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
        "description"
      ]
    };
    const fuse = new Fuse(this.state.items, options);
    const newFilteredItems = fuse.search(term);
    if ((typeof(term) === "undefined") || (term.length === 0)) {
      this.setState({
        filteredItems: this.state.items
      })} else {
      this.setState({
        filteredItems: newFilteredItems,
        });
      }
  }
  result(params) {
    console.log(params);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div class="container">
      <div class="categories">
            <Button>Administration and Finance</Button>
            <Button>Education</Button>
            <Button>Campus Life</Button>
            <Button>Environment</Button>
            <Button>Public Safety</Button>
            <Button>Health and Human Services</Button>
      </div>
      <div class="datasets">
            <Card>
                <Card.Title>Degrees Awarded <GrDocumentCsv></GrDocumentCsv> <AiOutlineFileExcel></AiOutlineFileExcel></Card.Title>
                <Card.Subtitle>Source: University of Illinois System <AiOutlineCheckCircle></AiOutlineCheckCircle></Card.Subtitle>
                <Card.Text>
                    The number of degrees awarded by academic year using the federal reporting timeline of July 1 through June 30.
                </Card.Text>
                <Button>Gender Binary</Button>
            </Card>
        <Card>
                <Card.Title>Healthcare Clinics <GrDocumentCsv></GrDocumentCsv><AiOutlineFileExcel></AiOutlineFileExcel></Card.Title>
                <Card.Subtitle>Source: University of Illinois Hospital <AiOutlineCheckCircle></AiOutlineCheckCircle></Card.Subtitle>
                <Card.Text>
                    Patient visits for Mile Square Health Clinics.
                </Card.Text>
            </Card>
            <Card>
                <Card.Title>Financial Aid <GrDocumentCsv></GrDocumentCsv></Card.Title>
                <Card.Subtitle>Source: University of Illinois System <AiOutlineCheckCircle></AiOutlineCheckCircle></Card.Subtitle>
                <Card.Text>
                    Financial aid information.
                </Card.Text>
                <Button id="button2">Excludes room and board</Button>
            </Card>
      </div>
      </div>
    );
  }
}


export default Datasets;