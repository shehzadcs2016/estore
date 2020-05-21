import { combineReducers } from "redux";
import productsApp from './productReducer';
import postsApp from './postReducer';
import {Auth} from './AuthReducer';
import Cart from './cartReducer';
import { UiReducer } from './uiReducer';


export default combineReducers({
    products: productsApp,
    posts: postsApp,
    Auth: Auth,
    Cart: Cart,
    UI:UiReducer
})