import React from 'react';
import Header from './Components/header';
import Slider from './Components/slider';
import Footer from './Components/footer';
import NavTabs from './Components/navtabs';

export default function Category() {

    return ( 
      <div>
  <Header/>
  <main>
    {/* slider Area Start*/}
          <Slider heading={'Category'}/>
    {/* slider Area End*/}
    {/* Latest Products Start */}
    <section className="latest-product-area ">
      <div className="container">
        <div className="row product-btn d-flex justify-content-between">
          <div className="properties__button row" >
                  {/*Nav Button  */}
                    <NavTabs   />
                 
            {/*End Nav Button  */}
          </div>
         
        </div>
        
        {/* End Nav Card */}
      </div>
    </section>
    {/* Latest Products End */}
    {/* Latest Offers Start */}
    <div className="latest-wrapper lf-padding">
      <div className="latest-area latest-height d-flex align-items-center" data-background="assets/img/collection/latest-offer.png">
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
                <form action="#">
                  <input type="email" placeholder="Your email here" />
                  <button>Shop Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* man Shape */}
        <div className="man-shape">
          <img src="assets/img/collection/latest-man.png" alt />
        </div>
      </div>
    </div>
    {/* Latest Offers End */}
    {/* Shop Method Start*/}
    <div className="shop-method-area section-padding30">
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
    <div className="gallery-wrapper lf-padding">
      <div className="gallery-area">
        <div className="container-fluid">
          <div className="row">
            <div className="gallery-items">
              <img src="assets/img/gallery/gallery1.jpg" alt />
            </div> 
            <div className="gallery-items">
              <img src="assets/img/gallery/gallery2.jpg" alt />
            </div>
            <div className="gallery-items">
              <img src="assets/img/gallery/gallery3.jpg" alt />
            </div>
            <div className="gallery-items">
              <img src="assets/img/gallery/gallery4.jpg" alt />
            </div>
            <div className="gallery-items">
              <img src="assets/img/gallery/gallery5.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Gallery End*/}
        </main>
        <Footer />
        
</div>

     );
  }

 