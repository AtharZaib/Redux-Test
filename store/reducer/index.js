import RenderList from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer: RenderList
});
export default rootReducer;
