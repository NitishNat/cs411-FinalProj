import React, { Fragment } from 'react';
import logo from './logo.svg';
import './homepage.css';
import {Link, Route} from 'react-router-dom';
import { Segment, Menu, Image } from 'semantic-ui-react';

class Page1 extends React.Component{

    render() {
        return (
            <div className="main">
              <h1 style={{textAlign: 'center', fontWeight: 'bold',paddingTop: "2em", background: "#dbc537", color: "white",fontSize: '30px'}}>Hey everyone, we are RUNTIME TERROR! <br/><br/> </h1>
        {/*       <label className="title">GOOGLE SCHOLAR VISUALIZER</label> */}

            <div className="nav">
              <Menu>
                    <Menu.Item>    
                        <Link to="/" style={{color:'black'}}>
                            <div>Home</div>
                        </Link>
                    </Menu.Item> 
                    <Menu.Item>
                        <Link to="/advancedPage/" style={{color:'red',fontSize: '16px', fontWeight: 'bold'}}>
                            <div>Advanced Page</div>
                        </Link>
                    </Menu.Item>
                    </Menu>
              </div>
              </div>
        );
    }
}

export default Page1;