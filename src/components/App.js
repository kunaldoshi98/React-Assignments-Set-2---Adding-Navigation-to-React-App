import React, { Component, useState } from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import "../styles/App.css";
function LocationDisplayComponent() {
  let location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}
function Home() {
  return (
    <>
      <div>You are home</div>
    </>
  );
}
function About() {
  return (
    <>
      <div>You are on the about page</div>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={() => <div>No match</div>} />
        </Switch>
        <LocationDisplayComponent />
      </div>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayComponent;
