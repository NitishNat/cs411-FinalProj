import React, { Fragment } from 'react';
import './homepage.css';
import {Link, Route} from 'react-router-dom';
import { Segment, Menu, Image } from 'semantic-ui-react';

class Page1 extends React.Component{

    render() {
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
                <Link to="/advancedpage/" style={{color:'red',fontSize: '16px', fontWeight: 'bold'}}>
                    <div>Popular Authors</div>
                </Link>
              </Menu.Item>
                    </Menu>
              </div>
              </div>
        );
    }
}

export default Page1;