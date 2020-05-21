const initialState = {
    products: [],
    
}
export default function productsApp(state = initialState, action) {
        
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {...state, products:action.payload}
        case "FETCH_PRODUCT":
            return {...state, products:action.payload}        
        case "FETCH_SEARCH":
            return {...state, products:action.payload}
        default:
      return state;
    }
}