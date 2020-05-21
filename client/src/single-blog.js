import React, { useEffect, useState } from 'react';
import Header from './Components/header';
import Slider from './Components/slider';
import Footer from './Components/footer';
import { connect } from 'react-redux';
import { fetchPost,CommentAction,FetchComment } from './redux/actions/index';
import { isAuthenticated } from './auth';
function SingleBlog(props) {
  var paramId=props.match.params.id
  const [comment, setComment] = useState("")
  useEffect(() => {
    if(paramId){
    props.fetchPost(paramId)
      props.FetchComment(paramId)
      }
    },[setComment,props.match.params.id])
  const handleChange = (e) => {
  setComment(e.target.value)
  }
  const commentClick = (e) => {
    if (!isAuthenticated()) {
      window.location.href="/login"
    }
    e.preventDefault();
    props.CommentAction(paramId, comment);

    setComment("");
  }
  if (props.posts) {
    return (
      <div>
  
      <Header />
      {/* slider Area Start*/}
      <Slider heading={'Single Blog'} />
      {/* slider Area End*/}
      {/*================Blog Area =================*/}
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div>
                <div className="single-post">
                  <div className="feature-img">
                    <img className="img-fluid" src={`http://localhost:3000/${props.posts.photo}`} alt="product" />
                  </div>
                  <div className="blog_details">
                    <h2>{props.posts.title}
                    </h2>
                    <ul className="blog-info-link mt-3 mb-4">
                      <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                      <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                    </ul>
                    <p className="excert">
                      {props.posts.body}
                    </p>
              
                  </div>
                </div>
                  
                <div className="navigation-top">
                  <div className="d-sm-flex justify-content-between text-center">
                    <p className="like-info"><span className="align-middle"><i className="fa fa-heart" /></span> Lily and 4
                people like this</p>
                    <div className="col-sm-4 text-center my-2 my-sm-0">
                      <p className="comment-count"><span className="align-middle"><i className="fa fa-comment"></i></span> 06 Comments</p>
                    </div>
                    <ul className="social-icons">
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                      <li><a href="#"><i className="fab fa-behance" /></a></li>
                    </ul>
                  </div>
                  </div>
                  {props.comments.length > 0 ?
                <div className="comments-area">
                  <h4>{props.comments.length} Comments</h4>
                  <div className="comment-list">
                    {props.comments && props.comments.map((comments,i) => (
                      <div className="single-comment justify-content-between d-flex" key={i}>
                        <div className="user justify-content-between d-flex">
                          <div className="thumb">
                            <img src={`http://localhost:3000/${comments.user.photo}`} alt="photo" />
                          </div>
                          <div className="desc">
                            <p className="comment">
                              {comments.comment}
                            </p>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <h5>
                                  <a href="#">Emilly Blunt</a>
                                </h5>
                                <p className="date">December 4, 2017 at 3:12 pm </p>
                              </div>
                              <div className="reply-btn">
                                <a href="#" className="btn-reply text-uppercase">reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
                
                      </div>
                    ))}
              
              
                  </div>
                </div>  :''
                }
                <div className="comment-form">
                  <h4>Leave a Reply</h4>
                  <form className="form-contact comment_form" onSubmit={commentClick} action="#" id="commentForm">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea className="form-control w-100" onChange={handleChange} name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="button button-contactForm btn_1 boxed-btn">Send Message</button>
                    </div>
                  </form>
                </div>
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
                        <p>(21)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Health Care</p>
                        <p>(21)</p>
                      </a>
                    </li>
                  </ul>
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
                      <input type="email" className="form-control" placeholder="Enter email" required />
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ Blog Area end =================*/}
      <Footer />
        
    </div>
    );
  }
  else {
      return <div className="jumbotron text-center">Loading....</div>
    }
   }


const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => {
    dispatch(fetchPost(id))
  },
  CommentAction: (id,comment) => {
    dispatch(CommentAction(id,comment))
  },
  FetchComment: (id) => {
    dispatch(FetchComment(id))
  },
})


const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    comments:state.posts.comments
  }
  
}
 
export default connect(mapStateToProps,mapDispatchToProps)(SingleBlog);