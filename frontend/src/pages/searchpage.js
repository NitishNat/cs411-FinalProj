import React, { Fragment } from 'react';
import './homepage.css';
import {Link, Route} from 'react-router-dom';
import { Segment, Menu, Image } from 'semantic-ui-react';

class Page1 extends React.Component {


handleReadClick() {
let authorName = document.getElementById('readName').value;
const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
fetch('http://localhost:3002/researcherData?name=' + authorName, requestOptions)
.then(response => response.json())
.then(data => {
let result = "ID :" + data[0].author_id + ", Name : " + data[0].author_name + ", Affiliation : " + data[0].affiliation + ", Total Citations : " + data[0].total_citations + ", Interests : " + data[0].interests + ", Picture URL : " + data[0].url_picture;
alert(result);
})
.catch(error => {
            alert("No such Author exists in the database!");
        });
}


render() {
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
      <button onClick={this.handleReadClick}>Submit</button>
      </div>

    </div>
  );
}
  
}

export default Page1;