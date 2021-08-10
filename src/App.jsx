import React from "react";
import { Route } from "wouter";

import { HomePage, ShopPage } from "./pages/pages.js";

const App = () =>{
  return(<div className="App">
    <Route path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
  </div>);
};

export default App;
