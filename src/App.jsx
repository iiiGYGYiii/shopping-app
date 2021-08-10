import React from "react";
import { Route } from "wouter";

import { HomePage } from "./pages/pages.js";

const App = () =>{
  return(<div className="App">
    <Route path="/" component={HomePage} />
    <Route path="/hats" component={()=><div>Hello hats</div>}/>
    
  </div>);
};

export default App;
