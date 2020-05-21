
const initialState = {
    posts: [],
    comments:[]
}
export default function postsApp(state = initialState, action) {
        
    switch (action.type) {
        case "FETCH_BLOGS":
            return {...state, posts:action.payload}
        case "FETCH_BLOG":
            return {...state, posts:action.payload}
        case "COMMENT_BLOG":
            return {...state, posts:action.payload}
        case "COMMENTS":
            return {...state, comments:action.payload}
        default:
      return state;
    }
}