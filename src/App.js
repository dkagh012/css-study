import React from 'react';
import './App.css';
import Wrapper from './component/Wrapper';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="container">
  <BrowserRouter>
 
  <Route exact path="/css-study">
          <Wrapper/>
        </Route>

      

        
  </BrowserRouter>

    
  
    </div>



  );
}


export default App;
