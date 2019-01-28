import React, { Component } from 'react';
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            
            <header className="App-header">
              <Nav />
            </header>

          <div className="App-Main">
            <Route path="/" component={Home} />
          </div>
        
        </div>
      </Router>

        


    )
  }
}

export default App;
