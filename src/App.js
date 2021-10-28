import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './Home';
import Service from './Service';
import About from './About.';
import Contact from './Contact';
import Error from './ErrorPage'
import { Route, Switch } from 'react-router';

const App=()=> {
  return (< >
    <Navbar />

    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/about' component={ About }/>
      <Route exact path='/service' component={ Service }/>
      <Route exact path='/contact' component={ Contact }/>
      <Route  component={ Error }/>
    </Switch>
  </ >);
}

export default App;
