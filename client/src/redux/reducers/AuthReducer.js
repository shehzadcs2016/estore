const initialState = {
    authenticated: false,
    message:''
}
export const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return { ...state, authenticated: true }
        case 'SET_UNAUTHENTICATED':
            return initialState;
        case 'LOGIN':
            return { authenticated: true, ...action.payload }
        case 'SIGNUP':
            return { authenticated: false, ...action.payload }
        case 'PROFILE':
            return { authenticated: false, ...action.payload }
        case 'EDIT_PROFILE':
            return { authenticated: false, ...action.payload }
        case 'DELETE_PROFILE':
            return { authenticated: false, ...action.payload }
        
        default:
            return state;
    }
    
}