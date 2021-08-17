import { useEffect } from "react";
import { Redirect, Route, Switch } from "wouter";
import { useDispatch, useSelector } from "react-redux";
import { auth, createUserProfileDocument } from "./services/firebase.utils";
import { setCurrentUser } from "./redux/reducers/user/user.reducer";

import { Header } from "./components/components";
import { HomePage, ShopPage, LogSignUpPage, CheckoutPage } from "./pages/pages";

const currentUserSelector = (state) => state.user.currentUser;

const App = () => {
  const user = useSelector(currentUserSelector);
  const dispatch = useDispatch();
  useEffect(
    () =>
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            dispatch(
              setCurrentUser({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data(),
                },
              })
            );
          });
        } else {
          dispatch(setCurrentUser({ currentUser: userAuth }));
        }
      }),
    [dispatch]
  );
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in">
          {user ? <Redirect to="/" /> : <LogSignUpPage />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
