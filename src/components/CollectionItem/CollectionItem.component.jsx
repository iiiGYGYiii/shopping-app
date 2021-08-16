import { useDispatch } from "react-redux";
import { addItemAction } from "../../redux/reducers/cart.reducer";

import "./CollectionItem.styles.scss";

import { CustomButton } from "../components";

const PreviewItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItemAction(item))} invert>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default PreviewItem;
