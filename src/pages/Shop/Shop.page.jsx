import { useEffect, useState } from "react";
import { Route } from "wouter";
import { useDispatch } from "react-redux";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../services/firebase.utils";
import { updateCollections } from "../../redux/reducers/shop/shop.reducer";

import "./Shop.styles.scss";

import { CategoryPage } from "../pages";
import { CollectionsOverview, WithSpinner } from "../../components/components";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const retrieveSnapshot = async () => {
      const collectionRef = firestore.collection("collections");
      const snapShot = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    };
    retrieveSnapshot();
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path="/">
        <CollectionsOverviewWithSpinner isLoading={isLoading} />
      </Route>
      <Route path="/:categoryId">
        {({ categoryId }) => <CategoryPage categoryId={categoryId} />}
      </Route>
    </div>
  );
};

export default ShopPage;
