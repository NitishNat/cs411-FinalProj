import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Page1 from "./pages/searchpage";
import Page2 from "./pages/advancedpage";
import Page3 from "./pages/unaffiliatedPapers";
import Page4 from "./pages/noPaperAuthor";
import Page5 from "./pages/listOfPapers";
import "./App.css";

function App() {
  return (
    <Fragment>
        <HashRouter>
            <Switch>
            <div style={{margin:'10px'}}>
                <Route exact path="/searchpage">
                    <Page1 />
                </Route>
                <Route exact path="/advancedpage">
                    <Page2 />
                </Route>
                <Route exact path="/unaffiliatedPapers">
                    <Page3 />
                </Route>
                <Route exact path="/noPaperAuthor">
                    <Page4 />
                </Route>
                <Route exact path="/listOfPapers">
                    <Page5 />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                </div>
            </Switch>
        </HashRouter>
    </Fragment>
  );
}

export default App;
