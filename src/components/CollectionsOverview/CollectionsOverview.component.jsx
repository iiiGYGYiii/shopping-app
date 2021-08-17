import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/reducers/shop/shop.selectors";

import "./CollectionsOverview.styles.scss";

import { PreviewCollection } from "../../components/components";

const collectionSelector = createStructuredSelector({
  collections: selectShopItems,
});

const CollectionsOverview = () => {
  const { collections } = useSelector(collectionSelector);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
