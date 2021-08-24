import { useEffect } from "react";
import { Route } from "wouter";
import { fetchCollectionsStartAsync } from "../../redux/reducers/shop/shop.reducer";
import { selectIsCollectionFetching } from "../../redux/reducers/shop/shop.selectors";

import "./Shop.styles.scss";

import { CategoryPage } from "../pages";
import { CollectionsOverview, WithSpinner } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = () => {
  const isCollectionFetching = useSelector(selectIsCollectionFetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path="/">
        <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
      </Route>
      <Route path="/:categoryId">
        {({ categoryId }) => <CategoryPage categoryId={categoryId} />}
      </Route>
    </div>
  );
};

export default ShopPage;
