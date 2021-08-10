import { Route } from "wouter";

import { Header } from "./components/components.js";
import { HomePage, ShopPage } from "./pages/pages.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
};

export default App;
