import React, { useEffect } from "react";
import background from "./assets/img/collection/latest-offer.png"
import "./App.css";
import "./assets/css/style.css"
import Header from "./Components/header";
import Footer from "./Components/footer";
import { fetchProducts } from './redux/actions/index';
import { connect } from 'react-redux';
import logo from './assets/img/logo/logo.png';
import MainCarosoul from "./Components/main_carsoul";
import './App.css'
import { Link } from "react-router-dom";
function Home(props) {
  useEffect(() => {
    props.fetchProducts();
  }, [])
  if (!props.UI.loading) {
    return (
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src={logo} alt="image" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <section  className="Header">
          <Header />
        </section>
        <main>
          <section className="latest-product-area mt-5">
            <div className="container">
              <div className="row product-btn d-flex justify-content-between">
                {/* Section Tittle */}
                <div className="col-xl-4 col-lg-5 col-md-5">
                  <div className="section-tittle mb-30">
                    <h2>Latest Products</h2>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-7">
                  {/*Nav Button  */}
                  {/*End Nav Button  */}
                </div>
              </div>
              {/* Nav Card */}
              {props.products.length > 0 ?(
              <div className="tab-content" id="nav-tabContent">
                {/* card one */}
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="row">
                    
                    {props.products && props.products.map((product, i) => (
                      <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                        <div className="single-product mb-60">
                          <div className="product-img">
                            <Link to={`single_product/${product._id}`}>
                              <img src={`http://localhost:3000/${product.photo[0].path}`} alt="logo" />
                            </Link>
                            <div className="new-product">
                              <span>New</span>
                            </div>
                          </div>
                          <div className="product-caption">
                            <div className="product-ratting">
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              <i className="far fa-star" />
                              
                              <i className="far fa-star low-star" />
                              <i className="far fa-star low-star" />
                            </div>
                            <h4><Link to={`single_product/${product._id}`}>{product.title}</Link></h4>
                            <div className="price">
                              <ul>
                                <li>${product.price}</li>
                                <li className="discount">${product.discount}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
             
                    ))}
             
              
                  </div>
                </div>

                </div>)
                : (<div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src={logo} alt="image" />
            </div>
          </div>
        </div>
      </div>)
            }
            </div>
          </section>
          <MainCarosoul />
          {/* Latest Products End */}
          {/* Best Product Start */}
          <section className="category-area section-padding30 " >
            <div className="container-fluid">
              {/* Section Tittle */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-tittle text-center mb-85">
                    <h2>Shop by Category</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-6">
                  <div className="single-category mb-30">
                    <div className="category-img">
                      <Link to={`/${'women'}`}>
                      
                        <img src="assets/img/categori/cat1.jpg" alt="logo" />
                        <div className="category-caption">
                          <h2>Women`s</h2>
                          <span className="best">Best New Deals</span>
                          <span className="collection">New Collection</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <div className="single-category mb-30">
                    <div className="category-img text-center">
                      <Link to={`/${'electronics'}`}>
                        <img src="assets/img/categori/cat2.jpg" alt="logo" />
                        <div className="category-caption">
                          <span className="collection">Discount!</span>
                          <h2>Electronics</h2>
                          <p>New Collection</p>
                        </div>
                      </Link>
                        
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <div className="single-category mb-30">
                    <div className="category-img">
                      <a href={`/${'men'}`}>
                        <img src="assets/img/categori/cat3.jpg" alt="logo" />
                        <div className="category-caption">
                          <h2>Man`s Cloth</h2>
                          <span className="best">Best New Deals</span>
                          <span className="collection">New Collection</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Best Collection End */}
          {/* Latest Offers Start */}
          <div className="latest-wrapper lf-padding">
            <div className="latest-area latest-height d-flex align-items-center" data-background={background}>
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                    <div className="latest-caption">
                      <h2>Get Our<br />Latest Offers News</h2>
                      <p>Subscribe news latter</p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6 ">
                    <div className="latest-subscribe">
                      <form action="/home">
                        <input type="email" placeholder="Your email here" />
                        <button>Shop Now</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* man Shape */}
              <div className="man-shape">
                <img src="assets/img/collection/latest-man.png" alt="logo" />
              </div>
            </div>
          </div>
          {/* Latest Offers End */}
          {/* Shop Method Start*/}
          <div className="shop-method-area ">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-package" />
                    <h6>Free Shipping Method</h6>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-unlock" />
                    <h6>Secure Payment System</h6>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-reload" />
                    <h6>Secure Payment System</h6>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shop Method End*/}
          {/* Gallery Start*/}
    
        </main>
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    UI:state.UI
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts())
  }
})

 
export default connect(mapStateToProps,mapDispatchToProps)(Home);
  
  

