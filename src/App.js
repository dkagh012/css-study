import React from 'react';
import './App.css';
import Wrapper from './component/Wrapper';
import { HashRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    
    <div className="container">
  <HashRouter>
  <Route exact path="/css-study">
          <Wrapper/>
        </Route>



        
  </HashRouter>

    
  
    </div>

  );
}

export default App;
