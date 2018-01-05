import React, { Component } from 'react';
import { Container,Row,Col } from 'react-grid-system';
import './../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        showText: true,
        listHolder:[],
        listHolderContent: [],
      };
  }

  editListHolder= (list) =>{
    const tempList = list.map((listElement) =>
      <li key ={listElement.toString()}>
        <a>{listElement}</a>
      </li>
    )
    this.setState({ listHolder: tempList,})
  }
  updateListHolderContent= (list) =>{
    this.setState({listHolderContent: list,})
  }
  filterList= (obj) =>{
    const tempVar = obj.target.value;
    const unFilteredList = this.state.listHolderContent;
    var filteredList = [];
    //console.log(tempVar);
    //console.log(unFilteredList);
    for (var i=0; i< unFilteredList.length; i++){
      //console.log(unFilteredList[i]);
      var temp = unFilteredList[i];
      if (temp.includes(tempVar)){
        filteredList.push(unFilteredList[i]);
      }
    };
    this.editListHolder(filteredList);
  }
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <Container>
        <Row>
          <Col sm={6} md={6} xl={6}>
            <h1 className= "app_title">List Filter App</h1>
            <h5 className= "app_title_sub"> Quick filter certain list</h5>

            <div className= "app_description">
              <ListBlock
                title ="Public api List"
                sub_title ="Test connection to public api"
                description = "Get data from public api."
                url ="https://dog.ceo/api/breeds/list"
                editListHolder = {this.editListHolder}
                updateListHolderContent = {this.updateListHolderContent}
                />
            </div>
          </Col>

          <Col sm={6} md={6} xl={6}>
            <input type="text" className="filter"
              placeholder="Search here.."
              onChange= {this.filterList}/>
            <ul className="filter-list">{this.state.listHolder}</ul>
            <button className="get_list_btn"
              onClick={() =>this.editListHolder(numbers)}>Edit</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

class ListBlock extends Component{
  constructor(props) {
    super(props);
    this.state =
      {
        tempListHolder:[]
      };
  }

  GetData = () => {
    console.log('this is:', this);
    this.props.updateListHolderContent(this.state.tempListHolder);
    this.props.editListHolder(this.state.tempListHolder);
  }

  componentDidMount() {
    var url = this.props.url;
    //console.log('component mounted');
    fetch(url, {method: 'GET',})
      .then(results => results.json())
      .then(data => this.setState({ tempListHolder: data.message }))
      .catch(function(error) {console.log(error)});
    //const numbers = [1, 2, 3, 4, 5];
    //this.setState({ tempListHolder: numbers,})
  }

  render(){
    return(
      <div>
      <h3>{this.props.title}</h3>
      <h6>{this.props.subtitle}</h6>
      <p>{this.props.description}</p>
      <button className="get_list_btn" onClick={this.GetData}>Get List</button>
      </div>
    );
  }
}

export default App;
