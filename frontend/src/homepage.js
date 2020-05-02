import React, { Fragment } from 'react';
import logo from './logo.svg';
import './homepage.css';
import {Link, Route} from 'react-router-dom';
import { Segment, Menu, Image } from 'semantic-ui-react';

class Homepage extends React.Component {

handleInsertClick() {


let aName = document.getElementById('insName').value;
let aId = document.getElementById('insId').value;
let aAffiliation = document.getElementById('insAffiliation').value;
let aTotalCitations = document.getElementById('insTotalCitations').value;
let aInterests = document.getElementById('insInterests').value;
let aUrlPicture = document.getElementById('insUrlPicture').value;


//let cName = document.getElementById('insName').value;
//let cSeasons = document.getElementById('insAct').value;
//let cWins = document.getElementById('insWins').value;
//let cLoss = document.getElementById('insLoss').value;
//let wPercent = (parseInt(cWins)) / (parseInt(cLoss) + parseInt(cWins));



const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({author_id: aId, author_name: aName, affiliation: aAffiliation, total_citations: aTotalCitations, interests: aInterests,
        url_picture: aUrlPicture})
    };
fetch('http://localhost:3002/addResearcherRecord', requestOptions)
.then(response => response.json())
.then(data => {
alert('Author ' + aName + "'s details have been inserted into the database!");
})
.catch(error => {
            alert('Aunthor already exists in the database!');
        });
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
let result = "ID :" + data[0].author_id + ", Name : " + data[0].author_name + ", Affiliation : " + data[0].affiliation + ", Total Citations : " + data[0].total_citations + ", Interests : " + data[0].interests + ", Picture URL : " + data[0].url_picture;
alert(result);
})
.catch(error => {
            alert("No such Author exists in the database!");
        });
}

handleUpdateClick() {
let aName = document.getElementById('updateName').value;
let aTotalCitations = document.getElementById('updateTotalCitations').value;

const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({authorName: aName, total_citations:aTotalCitations})
    };
fetch('http://localhost:3002/updateResearcherRecord', requestOptions)
.then(response => response.json())
.then(data => {
alert('Author ' + aName + "'s total citations has been changed to " + aTotalCitations);
})
.catch(error => {
            alert("Coach with such a name does not exist!");
        });
}
handleDeleteClick() {
let aName = document.getElementById('delName').value;
const requestOptions = {
        method: 'DELETE',
    };
fetch('http://localhost:3002/deleteAuthorRecord?authorName='+aName, requestOptions)
.then(response => response.json())
.then(data => {
alert('Author ' + aName + "'s details have been deleted from the database");
})
.catch(error => {
            alert("Author with such a name does not exist in the database");
        });
}

render() {
return (
    <div className="main">
      <h1 style={{textAlign: 'center', fontWeight: 'bold',paddingTop: "2em", background: "#dbc537", color: "white",fontSize: '30px'}}>Hey everyone, we are RUNTIME TERROR! <br/><br/> </h1>

    <div className="nav">
      <Menu>
            <Menu.Item>    
                <Link to="/" style={{color:'red',fontSize: '16px', fontWeight: 'bold'}}>
                    <div>Home</div>
                </Link>
            </Menu.Item> 
            <Menu.Item>
                <Link to="/advancedPage" style={{color:'black'}}>
                    <div>Advanced Page</div>
                </Link>
            </Menu.Item>
            </Menu>
      </div>

      <hr className="line" />
      
      <div className="insertDiv">
      <label className="insertLabel">Insert record in Researcher Table</label>
      <input type='number' id='insId' placeholder='Author Id'></input>
      <input type='text' id='insName' placeholder='Name of Author'></input>
      <input type='text' id='insAffiliation' placeholder='Affiliation'></input>

      <input type='number' id='insTotalCitations' placeholder='Total Citations'></input>
      <input type='text' id='insInterests' placeholder='Authors Interests'></input>
      <input type='text' id='insUrlPicture' placeholder='Picture URL'></input>
      <button onClick={this.handleInsertClick}>Submit</button>
      </div>

      <hr className="line" />

      <div className="readDiv">
      <label className="insertLabel">View records for any given Author</label>
      <input type='text' id='readName' placeholder='Name of Author'></input>
      <button onClick={this.handleReadClick}>Submit</button>
      </div>

      <hr className="line" />

      <div className="updateDiv">
      <label className="insertLabel">Update the number of citations for an Author</label>
      <input type='text' id='updateName' placeholder='Name of Author'></input>
      <input type='number' id='updateTotalCitations' placeholder='New Total Citations'></input>
      <button onClick={this.handleUpdateClick}>Submit</button>
      </div>

      <hr className="line" />

      <div className="deleteDiv">
      <label className="insertLabel">Delete records for an Author</label>
      <input type='text' id='delName' placeholder='Name of Author'></input>
      <button onClick={this.handleDeleteClick}>Submit</button>
      </div>
    </div>
  );
}
  
}

export default Homepage;