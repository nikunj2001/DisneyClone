import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Detail from "./components/Detail";
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>

  );
}

export default App;
