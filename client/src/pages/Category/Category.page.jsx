import { useSelector } from "react-redux";
import { selectCategoryIdItems } from "../../redux/reducers/shop/shop.selectors";

import "./Category.styles.scss";

import { CollectionItem } from "../../components/components";

const CategoryPage = ({ categoryId }) => {
  const items = useSelector(selectCategoryIdItems(categoryId));
  return (
    <div className="category">
      <h2 className="title">
        {categoryId[0].toUpperCase() + categoryId.slice(1)}
      </h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
