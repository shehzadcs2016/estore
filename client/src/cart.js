import React ,{ useEffect}from 'react';
import Footer from './Components/footer';
import Header from './Components/header';
import Slider from './Components/slider';
import { connect } from 'react-redux';
import { fetchCarts } from './redux/actions/index';
import { isAuthenticated } from './auth';
import { Redirect } from 'react-router-dom';

function CartList(props) {
  useEffect(() => {
    props.fetchCarts();
  },[])
  if (isAuthenticated()) {
    return (
      <div>
        <Header />
        {/* slider Area Start*/}
        <Slider heading={'Cart List'} />
        {/* slider Area End*/}
        {/*================Cart Area =================*/}
        <section className="cart_area section_padding">
          <div className="container">
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.carts && props.carts.map((carts, i) => (
                      <tr key={i}>
                        <td>
                          <div className="media">
                            <div className="d-flex">
                              <img src={`http://localhost:3000/${carts.product.photo[0].path}`} alt="product" />
                            </div>
                            <div className="media-body">
                              <p>{carts.product.title}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>${carts.product.price}</h5>
                        </td>
                        <td>
                          <div className="product_count">
                            <input className="input-number" type="text" defaultValue={1} min={0} max={10} />
                          </div>
                        </td>
                        <td>
                          <h5>$720.00</h5>
                        </td>
                      </tr>
                          
                    ))}

                        
              
                    <tr className="bottom_button">
                      <td>
                        <a className="btn_1" href="#">Update Cart</a>
                      </td>
                      <td />
                      <td />
                          
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>$2160.00</h5>
                      </td>
                    </tr>
                    <tr className="shipping_area">
                      <td />
                      <td />
                         
                       
                    </tr>
                  </tbody>
                </table>
                <div className="checkout_btn_inner float-right">
                  <a className="btn_1" href="confirmation">Continue Shopping</a>
                  <a className="btn_1 checkout_btn_1" href="/checkout">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div></section>
        {/*================End Cart Area =================*/}
        <Footer />
      </div>

    );
  }
  return <Redirect to="/login"/>
    }

const mapDispatchToProps = (dispatch) => ({
  fetchCarts: () => {
    dispatch(fetchCarts())
  },
})


const mapStateToProps = (state) => {
  return {
    carts: state.Cart.carts 
  }
  
}

 
export default connect(mapStateToProps,mapDispatchToProps)(CartList);