import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/reducers/shop/shop.selectors";

import "./Shop.styles.scss";

import { PreviewCollection } from "../../components/components";
const collectionSelector = createStructuredSelector({
  collections: selectShopItems,
});
const ShopPage = () => {
  const { collections } = useSelector(collectionSelector);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
