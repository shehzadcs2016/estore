import axios from "axios";
import { isAuthenticated } from "../../auth";

export const LoginAction = user => async dispatch => {
  dispatch({
    type: "LOADING_UI"
  });
  const products = await axios({
    method: "post",
    url: "http://localhost:3000/signIn",
    data: user
  })
    .then(res => {
      if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(res.data));
      }
      dispatch({
        type: "SET_AUTHENTICATED"
      });
      dispatch({
        type: "CLEAR_ERRORS"
      });
      // window.location.href="/"
      return res.data;
    })
    .catch(error => {
      // Error
      if (error.response) {
        dispatch({
          type: "SET_ERRORS",
          payload: error.response.data
        });
      }
    });
  // console.log(products.data);

  dispatch({
    type: "LOGIN",
    payload: products
  });
};

export const SignUpAction = user => async dispatch => {
  dispatch({
    type: "LOADING_UI"
  });
  const products = await axios({
    method: "post",
    url: "http://localhost:3000/signUp",
    data: user
  })
    .then(res => {
      dispatch({
        type: "CLEAR_ERRORS"
      });

      // window.location.href="/"
      return res.data;
    })
    .catch(error => {
      // Error
      if (error.response) {
        dispatch({
          type: "SET_ERRORS",
          payload: error.response.data
        });
      }
    });
  // console.log(products.data);
  dispatch({
    type: "SIGNUP",
    payload: products
  });
};

export const fetchProducts = () => async dispatch => {
  dispatch({
    type: "LOADING_UI"
  });
  await axios({
    method: "get",
    url: `http://localhost:3000/products`
  })
    .then(res => {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: res.data
      });

      return res;
    })
    .catch(error => {
      // Error
      if (error.response) {
        dispatch({
          type: "SET_ERRORS",
          payload: error.response.data
        });
      }
    });
  // console.log(products.data,"sabjah");
};

export const fetchProduct = id => async dispatch => {
  // console.log(id,"iid");

  await axios({
    method: "get",
    url: `http://localhost:3000/products/${id}`
  }).then(res => {
    dispatch({
      type: "FETCH_PRODUCT",
      payload: res.data
    });
    return res;
  });
  // console.log(products.data);
};

export const fetchPosts = () => async dispatch => {
  await axios({
    method: "get",
    url: `http://localhost:3000/post`
  }).then(res => {
    dispatch({
      type: "FETCH_BLOGS",
      payload: res.data
    });
    return res;
  });
  // console.log(posts.data);
};

export const fetchPost = id => async dispatch => {
  await axios({
    method: "get",
    url: `http://localhost:3000/post/${id}`
  }).then(res => {
    dispatch({
      type: "FETCH_BLOG",
      payload: res.data
    });
    return res;
  });
};

export const fetchRecord = search => async dispatch => {
  await axios({
    method: "get",
    url: `http://localhost:3000/search/${search}`
  }).then(res => {
    dispatch({
      type: "FETCH_SEARCH",
      payload: res.data
    });
    return res;
  });

  // console.log(sea);
};

export const createCart = product => async dispatch => {
  const user = isAuthenticated().user;
  await axios({
    method: "post",
    url: `http://localhost:3000/cart`,
    data: { product, user }
  })
    .then(res => {
      dispatch({
        type: "CREATE_CART",
        payload: res.data
      });
      window.location.href = "/cart";
      // window.location.href="/"
      return res.data;
    })
    .catch(error => {
      // Error
      if (error.response) {
        dispatch({
          type: "SET_ERRORS",
          payload: error.response.data
        });
      }
    });
  // console.log(cart.data);
};

export const fetchCarts = () => async dispatch => {
  if (isAuthenticated()) {
    const user = isAuthenticated().user._id;
    await axios({
      method: "get",
      url: `http://localhost:3000/cart/${user}`
    })
      .then(res => {
        dispatch({
          type: "FETCH_CARTS",
          payload: res.data
        });
        return res.data;
      })
      .catch(error => {
        // Error
        if (error.response) {
          dispatch({
            type: "SET_ERRORS",
            payload: error.response.data
          });
        }
      });
  }
  // console.log(cart.data,"cart");
};
// comment actions

export const CommentAction = (id, comment) => async dispatch => {
  const user = isAuthenticated().user;
  dispatch({
    type: "LOADING_UI"
  });
  await axios({
    method: "post",
    url: `http://localhost:3000/post/comment/${id}`,
    data: { user, comment }
  })
    .then(res => {
      dispatch({
        type: "CLEAR_ERRORS"
      });
      dispatch({
        type: "COMMENT_BLOG",
        payload: res.data
      });
      // window.location.href="/"
      return res.data;
    })
    .catch(error => {
      // Error
      if (error.response) {
        dispatch({
          type: "SET_ERRORS",
          payload: error.response.data
        });
      }
    });
  // console.log(products.data);
};

export const FetchComment = id => async dispatch => {
  dispatch({
    type: "LOADING_UI"
  });
  await axios({
    method: "get",
    url: `http://localhost:3000/comment/${id}`
  }).then(res => {
    dispatch({
      type: "COMMENTS",
      payload: res.data
    });
    // window.location.href="/"
    return res.data;
  });
  // console.log(products.data);
};

// end comment actions

export const Logout = () => dispatch => {
  localStorage.removeItem("jwt");
  dispatch({
    type: "SET_UNAUTHENTICATED"
  });
  window.location.href = "/login";
};
