import React, { useEffect } from 'react';
import Header from './header';
import Slider from './slider';
import "../assets/css/style.css"
import "../App.css";
import { connect } from 'react-redux';
import {fetchRecord} from '../redux/actions/index';
import FashionCoursal from './main_carsoul';
import Footer from './footer';
function Fashion(props) {
        var product = props.match.params.product;

    useEffect(() => {
        props.fetchRecord(product);
    },[])
        return (
            <div>
                <Header />
                <Slider heading={`${product }` + ` page`} />
                <section className="latest-product-area  mt-4">
                    <div className="container">
                        <div className="row product-btn d-flex justify-content-end align-items-end">
                            {/* Section Tittle */}
                            <div className="col-xl-4 col-lg-5 col-md-5">
                                <div className="section-tittle mb-30">
                                    <h3>Our {`${product}`} Products</h3>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 col-md-7">
                                <div className="properties__button f-right">
                                    {/*Nav Button  */}
                                    
                                    {/*End Nav Button  */}
                                </div>
                            </div>
                        </div>
                        {/* Nav Card */} 
                        <div className="tab-content" id="nav-tabContent">
                            {/* card one */}
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row">
                                    {props.products && props.products.map((products,i) => (
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                                        <div className="single-product mb-60">
                                                <div className="product-img">
                                                    <a href={`single_product/${products._id}`}>
                              <img src={`http://localhost:3000/${products.photo[0].path}`} alt="logo" />
                              </a>
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
                                                       <h4><a href={`single_product/${products._id}`}>{products.title}</a></h4>
                                                <div className="price">
                                                    <ul>
                                                <li>${products.price}</li>
                                                <li className="discount">${products.discount}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    
                                </div>
                            </div>
                            {/* Card two */}
     
                            {/* card foure */}
     
                        </div>
                        {/* End Nav Card */}
                    </div>
                </section>
                 <section className="category-area " >
                    <div className="container-fluid">
                        {/* Section Tittle */}
                        <FashionCoursal/>
                    </div>
                </section>
            <Footer/>

            </div>
        )
    }
const mapDispatchToProps = (dispatch) => ({
    fetchRecord: (product) => {
        dispatch(fetchRecord(product))
    }
})

const mapStateToProps = state => {  
  return {
    products:state.products.products
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Fashion);