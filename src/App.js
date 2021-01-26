import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Card, List, ClientAdd } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Route exact path="/" component={List} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/add" component={ClientAdd} />
      </div>
    </div>
  );
}

export default App;
