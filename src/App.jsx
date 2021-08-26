import { Redirect, Route, Switch } from "wouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Header, Scope } from "./components/components";
import { HomePage, ShopPage, LogSignUpPage, CheckoutPage } from "./pages/pages";
import { checkUserSession } from "./redux/reducers/user/user.reducer";

const currentUserSelector = (state) => state.user.currentUser;

const App = () => {
  const user = useSelector(currentUserSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession);
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/sign-in">
          {user ? <Redirect to="/" /> : <LogSignUpPage />}
        </Route>
        <Scope base="/shop">
          <ShopPage />
        </Scope>
      </Switch>
    </div>
  );
};

export default App;
