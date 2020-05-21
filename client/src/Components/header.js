import React, { useState}from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchRecord } from '../redux/actions/index';
import './css/style.css';
import logo from '../assets/img/logo/logo.png';
import { SignOut, isAuthenticated } from '../auth/index';

function Header(props) {
  const [search, setSearch] = useState("");
  
  const handleChange = e => {
    // setSearch(e.target.value)
     setSearch(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    props.fetchRecord(search);
    setSearch("");
  }
    return (
      <header className="main-header">
  {/* header top */}
  <div className="header-top grey">
    <div className="custom-container clearfix">
      {/*Top Left*/}
      <div className="top-left pull-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/*Top Right*/}
      <div className="top-right pull-right">
              <div className="social-links clearfix">
                {!isAuthenticated() ?
                  <>
                  <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                  </>
                  : <Link to="#" onClick={()=>SignOut()}>Log out</Link>
                }
                <a href="/cart"><i className="fas fa-shopping-cart">Cart</i></a>
                <Link to="/checkout">CheckOut</Link>

        </div>
      </div>
    </div>
  </div>
  {/*Header-Upper*/}
  <div className="header-upper black-bg-3 dark">
    <div className="custom-container clearfix">
      <div className="upper-right clearfix">
        <div className="nav-outer clearfix">
          {/* Main Menu */}
          <nav className="main-menu navbar-expand-lg">
            <div className="navbar-header">
              {/* Toggle Button */}      
              <a href="#menu" id="toggle"><span /></a>
            </div>
            <div id="menu" className="clearfix">
              <ul className="navigation clearfix">
                <li className="dropdown"><a href="/">Home</a>
                </li>
                 <li className="current dropdown"><a href="/category">Shop By category</a>
                        <div className="dropdown-content">
                          <ul >
                            <li>
                              <a href={`/${'fashion'}`}>Fashion</a>
                            </li>
                            <li>
                              <a href={`/${'sports'}`}>Sporting Goods </a>
                            </li>
                            <li>
                              <a href={`/${'electronics'}`}>Electronics</a>
                              </li>
                            </ul>
                      </div>
                </li>
                      
                <li className="dropdown"><a href="/blog">Our Blogs</a>
                </li>
                     
                <li><a href="/contact">My Account</a></li>
                <li><a href="/contact">Help & Contact</a></li>
              </ul>
            </div>
          </nav>
          {/* Main Menu End*/}
         
        </div>
      </div>
    </div>
  </div>
  {/*End Header Upper*/}
  <div className="blockchain">
    <div className="custom-container">
      <div className="block-header text-center">
        <h4>Lootlo Estore ko</h4>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
              <input type="text" value={search} onChange={handleChange} className="form-control " name="search" placeholder="Search products here " />
              <button className="search-form-btn" type="Submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</header>

    )
  }

const mapStateToProps = (state) => {
  // console.log(state.products[1]);
  return {
    products:state.products
  }
  
}
const mapDispatchToProps = (dispatch) => ({
    fetchRecord: (search)=> {
  dispatch(fetchRecord(search))
      }
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);