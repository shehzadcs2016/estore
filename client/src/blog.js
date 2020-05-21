import React from 'react';
import Header from './Components/header';
import Slider from './Components/slider';
import Footer from './Components/footer';
import {connect} from 'react-redux'
import { fetchPosts } from './redux/actions/index'
class Blog extends React.Component {

  componentDidMount() {
    
    this.props.fetchPosts();
  }
  render() { 
    const { posts } = this.props;
    if (posts.length > 0) {
      return (
        <div>
  
          <Header />
          <Slider heading={'Blog'} />
          {/*================Blog Area =================*/}
          <section className="blog_area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                  <div className="blog_left_sidebar">
                    {posts && posts.map((posts, i) => (
                      <article className="blog_item" key={i}>
                        <div className="blog_item_img">
                          <a href={`/single/${posts._id}`} >
                            <img className="card-img rounded-0" src={`http://localhost:3000/${posts.photo}`} alt='post image' />
                          </a>
                          <a href="#" className="blog_item_date">
                            <h3>{new Date(posts.created).getDay()}  {new Date(posts.created).toString().split(" ")[1]}  </h3>
                            <p>{new Date(posts.created).getFullYear()}</p>
                          </a>
                        </div>
                        <div className="blog_details">
                          <a href={`/single/${posts._id}`} className="d-inline-block">
                            <h2>{posts.title}</h2>
                          </a>
                
                          <p>{posts.body}</p>
                          <ul className="blog-info-link">
                            <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                            <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                          </ul>
                        </div>
                      </article>
                        
                    ))}
            
            
                    <nav className="blog-pagination justify-content-center d-flex">
                      <ul className="pagination">
                        <li className="page-item">
                          <a href="#" className="page-link" aria-label="Previous">
                            <i className="ti-angle-left" />
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">1</a>
                        </li>
                        <li className="page-item active">
                          <a href="#" className="page-link">2</a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link" aria-label="Next">
                            <i className="ti-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_right_sidebar">
                    <aside className="single_sidebar_widget search_widget">
                      <form action="#">
                        <div className="form-group">
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search Keyword" />
                            <div className="input-group-append">
                              <button className="btns" type="button"><i className="ti-search" /></button>
                            </div>
                          </div>
                        </div>
                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
                      </form>
                    </aside>
                    <aside className="single_sidebar_widget post_category_widget">
                      <h4 className="widget_title">Category</h4>
                      <ul className="list cat-list">
                        <li>
                          <a href="#" className="d-flex">
                            <p>Resaurant food</p>
                            <p>(37)</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex">
                            <p>Travel news</p>
                            <p>(10)</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex">
                            <p>Modern technology</p>
                            <p>(03)</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex">
                            <p>Product</p>
                            <p>(11)</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex">
                            <p>Inspiration</p>
                            <p>21</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-flex">
                            <p>Health Care (21)</p>
                            <p>09</p>
                          </a>
                        </li>
                      </ul>
                    </aside>
                    <aside className="single_sidebar_widget popular_post_widget">
                      <h3 className="widget_title">Recent Post</h3>
                      {posts && posts.map((posts, i) => (
                        <div className="media post_item" key={i}>
                          <img height={'70px'} src={`http://localhost:3000/${posts.photo}`} alt="post" />
                          <div className="media-body">
                            <a href="single-blog.html">
                              <h3>{posts.title}</h3>
                            </a>
                            <p>{new Date(posts.created).getDay()}  {new Date(posts.created).toString().split(" ")[1]}, {new Date(posts.created).getFullYear()}</p>
                          </div>
                        </div>
                      ))}
             
                    
                    </aside>
                    <aside className="single_sidebar_widget tag_cloud_widget">
                      <h4 className="widget_title">Tag Clouds</h4>
                      <ul className="list">
                        <li>
                          <a href="#">project</a>
                        </li>
                        <li>
                          <a href="#">love</a>
                        </li>
                        <li>
                          <a href="#">technology</a>
                        </li>
                        <li>
                          <a href="#">travel</a>
                        </li>
                        <li>
                          <a href="#">restaurant</a>
                        </li>
                        <li>
                          <a href="#">life style</a>
                        </li>
                        <li>
                          <a href="#">design</a>
                        </li>
                        <li>
                          <a href="#">illustration</a>
                        </li>
                      </ul>
                    </aside>
            
                    <aside className="single_sidebar_widget newsletter_widget">
                      <h4 className="widget_title">Newsletter</h4>
                      <form action="#">
                        <div className="form-group">
                          <input type="email" className="form-control" required />
                        </div>
                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
                      </form>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*================Blog Area =================*/}
          <Footer />
            
        </div>

      );
    }
    else {
      return <div className="jumbotron text-center">Loading....</div>
    }
    }
}
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(fetchPosts())
  }
})

const mapStateToProps = (state) => {
  // console.log(state.posts[0]);
  return {
    posts:state.posts.posts
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Blog);