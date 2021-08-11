import { useEffect, useState } from "react";
import { Route } from "wouter";

import { Header } from "./components/components";
import { HomePage, ShopPage, LogSignUpPage } from "./pages/pages";
import { auth } from "./services/firebase.utils";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => auth.onAuthStateChanged((user) => setUser(user)), [user]);
  return (
    <div className="App">
      <Header currentUser={user} />
      <Route path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sign-in" component={LogSignUpPage} />
    </div>
  );
};

export default App;
