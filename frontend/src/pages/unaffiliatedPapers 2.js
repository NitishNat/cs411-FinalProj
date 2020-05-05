import React, { Fragment } from 'react';
import './homepage.css';
import {Link, Route} from 'react-router-dom';
import { Segment, Menu, Image } from 'semantic-ui-react';
import './searchpage.css';

import {Form, Button, Card, Alert} from "react-bootstrap"

class Page3 extends React.Component {

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
fetch('http://localhost:3002/unaffiliatedPapers', requestOptions)
.then(response => response.json())
.then(data => {
// let result = "ID :" + data[0].author_id + ", Name : " + data[0].author_name + ", Affiliation : " + data[0].affiliation + ", Total Citations : " + data[0].total_citations + ", Interests : " + data[0].interests + ", Picture URL : " + data[0].url_picture;
//alert(result);
// console.log(data["@author_name"]);
// console.log("hello");
this.setState({one: data[0].title,  two: data[1].title, three: data[2].title, four: data[3].title, five: data[4].title, six: data[5].title, seven: data[6].title, eight: data[7].title, nine: data[8].title, ten: data[9].title});
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
                <Link to="/unaffiliatedPapers/" style={{color:'red',fontSize: '16px', fontWeight: 'bold'}}>
                    <div>Find Unaffiliated Papers</div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/advancedpage/" style={{color:'black'}}>
                    <div>Popular Authors</div>
                </Link>
            </Menu.Item>
            </Menu>
      </div>

      <hr className="line" />

      <div className="readDiv">
      <label className="insertLabel">View Papers that are Unaffiliated or have Authors with no Citations</label>
      
      <button onClick={this.handleReadClick}>Submit</button> <br />

<Card id="card" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title> Unaffiliated Papers or Authors without Citations</Card.Title>
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

export default Page3;