import { combineReducers } from "redux";

//Импортируем редусеры и собираем в один
import phoneReducer from "./phone-reducer";

var reducers = combineReducers({
  phoneState: phoneReducer
});

export default reducers;
