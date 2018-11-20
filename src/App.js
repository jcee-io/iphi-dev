import React, { Component } from 'react';
import './styles/App.css';
import Nav from './Nav';
import Home from './Main-Pages/Home';
import About from './Main-Pages/About';
import Rush from './Main-Pages/Rush';
import Calendar from './Main-Pages/Calendar';
import Login from './Main-Pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const FrontPage = () => (
  <div>
    <Home />
    <About />
  </div>
);
class App extends Component {
  state ={
    page: 'Home',
  };

  togglePage = event => {
    this.setState({ page: event.target.textContent });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav page={this.state.page} togglePage={this.togglePage} />
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
