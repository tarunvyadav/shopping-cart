import { combineReducers } from "redux";
import { productsReducer,cartReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  // product: selectedProductsReducer,
  rcart:cartReducer,
});
export default reducers;
