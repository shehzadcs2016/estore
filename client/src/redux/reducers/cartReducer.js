const initialState = {
    carts: [],
}
export  default function Cart(state = initialState, action) {
        
    switch (action.type) {
        case "CREATE_CART":
            return {...state, carts:action.payload}
        case "FETCH_CARTS":
            return {...state, carts:action.payload}
        default:
      return state;
    }
}
