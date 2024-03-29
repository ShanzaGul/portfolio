import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
        <div className="App" >
            <Header />
              <Switch>         
                <Route exact path="/">
                  <Home />
              </Route>

                <Route path="/work" component={Work} />
                <Route path="/about" component={About} />
                </Switch>
                        

             <Footer />
         </div>
     </Router>
  );
}

export default App;
