import React, { useEffect } from 'react';
import Header from './Components/header';
import Slider from './Components/slider';
import Footer from './Components/footer';
import CarouselPage from './Components/carosoul';
import { connect } from 'react-redux';
import { fetchProduct,createCart } from './redux/actions/index'
import './assets/css/style.css'
function SingleProduct(props) {
  useEffect(() => {
    var paramId = props.match.params.id
    if (paramId) {
      props.fetchProduct(paramId)
    }
  }, [props.match.params.id])
  


  const addToCart = () => {
    props.createCart(props.products);
    window.location.href = "/cart";
  }
  console.log(props.products,"single products")
  if (props.products) {
    return (
      <div>
        <Header />
        {/* slider Area Start*/}
        <Slider heading={"Single Product"} />
        {/* slider Area End*/}
        {/*================Single Product Area =================*/}
        <div className="product_image_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                {props.products.photo ? 
                <CarouselPage photo={props.products.photo} />
                  
                :""
              }
              
              </div>
              <div className="col-lg-8">
                <div className="single_product_text text-center">
                  <h3>{props.products.title}</h3>
                  <p>
                    {props.products.body}
                  </p>
                  <div className="card_area">
                    <div className="add_to_cart">
                      <button onClick={addToCart} className="btn_3">add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
        
            </div>
          </div>
        </div>
        {/*================End Single Product Area =================*/}
        {/* subscribe part here */}
        <section className="subscribe_part section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="subscribe_part_content">
                  <h2>Get promotions &amp; updates!</h2>
                  <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                  <div className="subscribe_form">
                    <input type="email" placeholder="Enter your mail" />
                    <a href="#" className="btn_1">Subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* subscribe part end */}
        <Footer />
        
      </div>
    );
  }
  else {
  return <div>loading......</div>
}

}

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => {
    dispatch(fetchProduct(id))
  },
  createCart: (products) => {
    dispatch(createCart(products))
  },
  
})


const mapStateToProps = (state) => {
  // console.log(state.products);
  return {
    products: state.products.products
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleProduct);