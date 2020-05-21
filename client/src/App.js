import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Category from "./catagory";
import Cart from "./cart";
import Blog from "./blog";
import SingleProduct from "./single-product";
import SingleBlog from "./single-blog";
import Login from './login';
import Saved from './elements';
import About from './about';
import Confirmation from './confirmation';
import CheckOut from './checkout';
import Contact from './contact';
import SignUp from './signup'
import Search from './Components/search'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/saved" exact component={Saved} />
          <Route path="/about" exact component={About} />
          <Route path="/confirmation" exact component={Confirmation} />
          <Route path="/checkout" exact component={CheckOut} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/category" exact component={Category} />
          <Route path="/single_product/:id" exact component={SingleProduct} />
          <Route path="/single/:id" exact component={SingleBlog} />
          <Route path="/:product" exact component={Search} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
