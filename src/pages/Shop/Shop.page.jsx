import "./Shop.styles.scss";

import { CollectionsOverview } from "../../components/components";
import { Route } from "wouter";
import CategoryPage from "../Category/Category.page";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Route component={CollectionsOverview} exact path="/" />
      <Route path="/:categoryId">
        {({ categoryId }) => <CategoryPage categoryId={categoryId} />}
      </Route>
    </div>
  );
};

export default ShopPage;
