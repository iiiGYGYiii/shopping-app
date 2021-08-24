import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../../services/firebase.utils";
import { SHOP_DATA } from "../../../pages/Shop/Shop.data";

const SHOP_TYPES = {
  FETCH_COLLECTIONS_START: "shop/FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS: "shop/FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAIL: "shop/FETCH_COLLECTIONS_FAIL",
};

const shopReducer = (
  state = { shop: SHOP_DATA, isFetching: false, errorMessage: null },
  action
) => {
  switch (action.type) {
    case SHOP_TYPES.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case SHOP_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        shop: action.payload,
        isFetching: false,
      };
    case SHOP_TYPES.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const fetchCollectionsStart = () => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    try {
      const snapshot = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message));
    }
  };
};

export default shopReducer;
