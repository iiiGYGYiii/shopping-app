import { useSelector } from "react-redux";

import "./CollectionsOverview.styles.scss";

import { PreviewCollection } from "../../components/components";

const collectionSelector = (state) => state.shop.shop;

const CollectionsOverview = () => {
  const collections = useSelector(collectionSelector);
  return (
    <div className="collections-overview">
      {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
