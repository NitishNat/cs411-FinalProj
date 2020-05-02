import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./homepage";
import Page1 from "./advancedPage";
import "./App.css";

function App() {
  return (
    <Fragment>
                <HashRouter>
                    <Switch>
                    <div style={{margin:'10px'}}>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/advancedPage">
                            <Page1 />
                        </Route>
                        </div>
                    </Switch>
                </HashRouter>
            </Fragment>
  );
}

export default App;
