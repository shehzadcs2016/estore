import React from 'react';
import Header from './Components/header';
import Slider from './Components/slider';
import Footer from './Components/footer';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginAction } from './redux/actions/index'
import {isAuthenticated} from './auth/index';
class Login extends React.Component {
  state = {
        email: '',
        password: '',
       open: false,
       error: ''
  }
  componentWillReceiveProps({ UI }) {
    if (UI.errors) {
      this.setState({ error: UI.errors.message });
    }

  }


  handleChange = (name) => e => {
        this.setState({ error: "" });
    this.setState({[name]:e.target.value})
  }
  
  clickSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    // this.setState({ loading: true });
    const user = {
      email,
      password
    };
    this.props.LoginAction(user);
  };
  
  render() { 
    const {  email, password,error } = this.state;
    if (isAuthenticated())
      return <Redirect to='/'/>
        return (  <div>
  <Header/>
  {/* slider Area Start*/}
          <Slider heading={'Login'}/>
  {/* slider Area End*/}
  {/*================login_part Area =================*/}
  <section className="login_part section_padding ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="login_part_text text-center">
            <div className="login_part_text_iner">
              <h2>New to our Shop?</h2>
              <p>There are advances being made in science and technology
                everyday, and a good example of this is the</p>
             <Link to="/signup" className="btn_3">Create an Account</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="login_part_form">
            <div className="login_part_form_iner">
              <h3>Welcome Back ! <br />
                Please Sign in now</h3>
                      <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
            <form onSubmit={this.clickSubmit} className="row contact_form" action="#" method="post"  noValidate="novalidate">
                
                <div className="col-md-12 form-group p_star">
                  <input required type="email" value={email} onChange={this.handleChange("email")} className="form-control" id="email" name="email"  placeholder="email" />
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <input type="password" required value={password} onChange={this.handleChange("password")} className="form-control" id="password" name="password"  placeholder="Password" />
                                        </div>
                
                <div className="col-md-12 form-group">
                    
                  {/* <div className="creat_account d-flex align-items-center">
                    <input type="checkbox" id="f-option" name="selector" />
                    <label htmlFor="f-option">Remember me</label>
                  </div> */}
                  <button type="submit" value="submit" className="btn_3">
                    Login
                  </button>
                  {/* <a className="lost_pass" href="#">forget password?</a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
          {/*================login_part end =================*/}
          <Footer />
          
</div>
);
    }
}

const mapDispatchToProps = (dispatch) => ({
  LoginAction: (user) => {
    dispatch(LoginAction(user))
  }
})



const mapStateToProps = state => {  
  return {
    Auth: state.Auth,
    UI:state.UI
  }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(Login);