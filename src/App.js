import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import AgregarHeroe from './views/AgregarHeroe';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/agregarHeroe" component={AgregarHeroe}/>
      </Switch>
    </Router>
  );
}


export default App;
