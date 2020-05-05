import React, { Fragment } from 'react';
import './homepage.css';
import {Link, Route} from 'react-router-dom';
import { Segment, Menu, Image } from 'semantic-ui-react';
import './searchpage.css';

import {Form, Button, Card, Alert} from "react-bootstrap"

class Page1 extends React.Component {

    constructor() {
        super();
        this.state = {searchResult: "",
        aid: '',
        aname: '',
        affi: '',
        cite: '',
        attr: '',
        email: '',
        inte:'',
        pic: '',
        title:''
};
        this.handleReadClick = this.handleReadClick.bind(this);
    }

handleReadClick() {
let authorName = document.getElementById('readName').value;
const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
fetch('http://localhost:3002/researcherData?name=' + authorName, requestOptions)
.then(response => response.json())
.then(data => {
// let result = "ID :" + data[0].author_id + ", Name : " + data[0].author_name + ", Affiliation : " + data[0].affiliation + ", Total Citations : " + data[0].total_citations + ", Interests : " + data[0].interests + ", Picture URL : " + data[0].url_picture;
//alert(result);
// console.log(data["@author_name"]);
// console.log("hello");
this.setState({title: data['@author_name'],  aname: "Name : " + data['@author_name'], aid: "ID :" + data['@author_id'], affi: "Affiliation : " + data['@affiliation'], cite:  "Total Citations : " + data['@total_citations'], inte:  "Interests : " + data['@interests'], pic: data['@url_picture']});
document.getElementById("image").src = this.state.pic;
})
.catch(error => {
            alert("No such Author exists in the database!");
        });
this.forceUpdate();
}


render() {

    let sRes = this.state.searchResult;
    let said = this.state.aid;
    let saname = this.state.aname;
    let saffi = this.state.affi;
    let scite = this.state.cite;
    let sinte = this.state.inte;
    let spic = this.state.pic;
    let stit = this.state.title;
    let sResDisplay = <label>{sRes}</label>
    let saidDisplay = <label>{said}</label>
    let sanameDisplay = <label>{saname}</label>
    let saffiDisplay = <label>{saffi}</label>
    let sciteDisplay = <label>{scite}</label>
    let sinteDisplay = <label>{sinte}</label>
    let spicDisplay = <label>{spic}</label>
    let stitleDisplay = <label>{stit}</label>
return (
    
    <div className="main">
      <h1 style={{textAlign: 'center', fontWeight: 'bold',paddingTop: "2em", background: "#dbc537", color: "white",fontSize: '30px'}}>Hey everyone, we are RUNTIME TERROR! <br/><br/> </h1>

    <div className="nav">
      <Menu>
      <Menu.Item>    
                <Link to="/" style={{color:'black'}}>
                    <div>Modify Database</div>
                </Link>
            </Menu.Item> 
            <Menu.Item>
                <Link to="/searchpage/" style={{color:'red',fontSize: '16px', fontWeight: 'bold'}}>
                    <div>Search for Authors</div>
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
      <label className="insertLabel">View records for any given Author</label>
      <input type='text' id='readName' placeholder='Name of Author'></input>
      <button onClick={this.handleReadClick}>Submit</button> <br />
<img src="" alt="No Picture" id = "image"></img>
<Card id="card" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title> Author's Data</Card.Title>
                            <Card.Text>
                                                <div> 
                                {saidDisplay}
                            </div>
                            <div> 
                                {sanameDisplay}
                            </div>
                            <div> 
                                {sResDisplay}
                            </div>
                            <div> 
                                {saffiDisplay}
                            </div>
                            <div> 
                                {sciteDisplay}
                            </div>
                            <div> 
                                {sinteDisplay}
                            </div>
                            <div> 
                                {spicDisplay}
                            </div>
                         
                            </Card.Text>
                        </Card.Body>
                    </Card>
        
      </div>

    </div>
  );
}
  
}

export default Page1;