import React, { Component } from "react";
import '../App.css'
  import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { fetchRecord, fetchProducts } from '../redux/actions/index'
import logo from '../assets/img/logo/logo.png';

import  {connect} from 'react-redux'
class TabsDefault extends Component {
    componentDidMount() {
        this.props.fetchProducts();
        }
    state = {
      activeItem: "1"
    };
    toggle = (tab)  => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
        const { products } = this.props;
        if (!this.props.UI.loading) {
    return (
       <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src={logo} alt="image"/>
                </div>
            </div>
        </div>
    </div>
    )
  }
        return (
        <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink className="tab mr-4"  link to="#" active={this.state.activeItem === "1"} onClick={()=>this.toggle("1",this.props.fetchProducts())} role="tab" >
              All
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="tab mr-4" link to="#" active={this.state.activeItem === "2"} onClick={()=>this.toggle("2",this.props.fetchRecord('fashion'))} role="tab" >
              Fashion
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="tab" link to="#" active={this.state.activeItem === "3"} onClick={()=>this.toggle("3",this.props.fetchRecord('electronics'))} role="tab" >
              Electronics
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
              <MDBTabPane tabId="1" role="tabpanel">
                
            <div className="row">
                    {products && products.map(products => (
                <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="single-product mb-60">
            <div className="product-img">
            <img src={`http://localhost:3000/${products.photo[0].path}`} alt={'product'} />
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
                      
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <div className="row">
                    {products && products.map(products => (
                <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="single-product mb-60">
            <div className="product-img">
            <img src={`http://localhost:3000/${products.photo[0].path}`} alt={'product'} />
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
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <div className="row">
                    {products && products.map(products => (
                <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="single-product mb-60">
            <div className="product-img">
            <img src={`http://localhost:3000/${products.photo[0].path}`} alt={'product'} />
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
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
   dispatch(fetchProducts()) 
  },
  fetchRecord: (search) => {
   dispatch(fetchRecord(search)) 
  }
 
})

const mapStateToProps = state => {  
    // console.log(state);
  return {
    products: state.products.products,
    UI:state.UI
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (TabsDefault);