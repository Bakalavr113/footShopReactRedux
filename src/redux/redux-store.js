import { applyMiddleware, compose } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import sliderReducer from "./Reducers/SliderReducer";
let reducers = combineReducers({
    HomeSlider: sliderReducer
});
// const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);
// sagaMiddleware.run(rootWather)

export default store;