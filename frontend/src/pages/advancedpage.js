import React, { Fragment } from 'react';
import './homepage.css';
import {Link, Route} from 'react-router-dom';
import { Segment, Menu, Image } from 'semantic-ui-react';
import {Form, Button, Card, Alert} from "react-bootstrap"

class Page1 extends React.Component{
      constructor() {
        super();
        this.state = {
        searchResult: "",
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven:'',
        eight: '',
        nine:'',
        ten: ''
    };

    this.handleReadClick = this.handleReadClick.bind(this);
    }

handleReadClick() {
//let authorName = document.getElementById('readName').value;
const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
fetch('http://localhost:3002/advancedFunction', requestOptions)
.then(response => response.json())
.then(data => {

  this.setState({one: data[0].author_name + ": " + data[0].author_count,  two: data[1].author_name + ": " + data[1].author_count, three: data[2].author_name + ": " + data[2].author_count, four: data[3].author_name + ": " + data[3].author_count, five: data[4].author_name + ": " + data[4].author_count, six: data[5].author_name + ": " + data[5].author_count, seven: data[6].author_name + ": " + data[6].author_count, eight: data[7].author_name + ": " + data[7].author_count, nine: data[8].author_name + ": " + data[8].author_count, ten: data[9].author_name + ": " + data[9].author_count});
  //document.getElementById("image").src = this.state.pic;
})
.catch(error => {
            alert("No such Author exists in the database!");
        });
this.forceUpdate();
}


    render() {
      let sOne = this.state.one;
      let sTwo = this.state.two;
      let sThree = this.state.three;
      let sFour = this.state.four;
      let sFive = this.state.five;
      let sSix = this.state.six;
      let sSeven = this.state.seven;
      let sEight = this.state.eight;
      let sNine = this.state.nine;
      let sTen = this.state.ten;
      let sOneDisplay = <label>{sOne}</label>
      let sTwoDisplay = <label>{sTwo}</label>
      let sThreeDisplay = <label>{sThree}</label>
      let sFourDisplay = <label>{sFour}</label>
      let sFiveDisplay = <label>{sFive}</label>
      let sSixDisplay = <label>{sSix}</label>
      let sSevenDisplay = <label>{sSeven}</label>
      let sEightDisplay = <label>{sEight}</label>
      let sNineDisplay = <label>{sNine}</label>
      let sTenDisplay = <label>{sTen}</label>
        return (
            <div className="main">
              <h1 style={{textAlign: 'center', fontWeight: 'bold',paddingTop: "2em", background: "#dbc537", color: "white",fontSize: '30px'}}>Google Scholar Visualizer <br/><br/> </h1>

            <div className="nav">
              <Menu>
              <Menu.Item>    
                <Link to="/" style={{color:'black'}}>
                    <div>Modify Database</div>
                </Link>
              </Menu.Item> 
              <Menu.Item>
                <Link to="/searchpage/" style={{color:'black'}}>
                    <div>Search for Authors</div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/unaffiliatedPapers/" style={{color:'black'}}>
                    <div>Find Unaffiliated Papers</div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/noPaperAuthor/" style={{color:'black'}}>
                    <div>Find Number of Authors Who Don't Have Papers in Different Fields by Count </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/advancedpage/" style={{color:'red',fontSize: '16px', fontWeight: 'bold'}}>
                    <div>Popular Authors</div>
                </Link>
              </Menu.Item>
              </Menu>
              </div>


      <hr className="line" />

      <div className="readDiv">
      <label className="insertLabel">View Most Popular Authors</label>
      
      <button onClick={this.handleReadClick}>Submit</button> <br />

<Card id="card" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title> Most Popular Authors in the Database</Card.Title>
                            <Card.Text>
                            <ul>
                                <li><div> 
                                    {sOneDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sTwoDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sThreeDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sFourDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sFiveDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sSixDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sSevenDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sEightDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sNineDisplay}
                                </div>
                                </li>

                                <li><div> 
                                    {sTenDisplay}
                                </div>
                                </li>
                                
                            </ul>
                         
                            </Card.Text>
                        </Card.Body>
                    </Card>
        
      </div>
              </div>
        );
    }
}

export default Page1;