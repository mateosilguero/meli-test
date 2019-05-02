import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home';
import Items from './routes/Items';
import ItemDetails from './routes/ItemDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route exact path="/items/:id" component={ItemDetails} />
        <Route exact path="/items" component={Items} />        
      </div>
    </Router>
  );
}

export default App;
