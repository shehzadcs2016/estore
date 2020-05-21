import reducers from './reducers/index'
import { createStore, applyMiddleware ,compose} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from "redux-logger";
const middleware = [reduxThunk, logger];

const initialState = {};

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;