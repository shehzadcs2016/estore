import React from "react";
import Header from "./Components/header";
import Slider from "./Components/slider";
import Footer from "./Components/footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SignUpAction } from "./redux/actions/index";
class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: ""
  };

  componentWillReceiveProps({ UI, Auth }) {
    if (UI.errors) {
      this.setState({ error: UI.errors.message });
    }
    this.setState({ open: Auth.authenticated });
  }

  handleChange = name => e => {
    this.setState({ error: "" });
    this.setState({ [name]: e.target.value });
  };
  fileChange = e => {
    this.setState({ error: "" });
    this.setState({
      photo: e.target.files[0]
    });
  };
  clickSubmit = event => {
    event.preventDefault();
    const { name, email, password, photo } = this.state;

    let formData = new FormData(); //formdata object

    formData.append("name", name); //append the values with key, value pair
    formData.append("email", email);
    formData.append("password", password);
    formData.append("photo", photo);

    this.props.SignUpAction(formData);
  };

  render() {
    const { name, email, password, error, open } = this.state;
    return (
      <div>
        <Header />
        {/* slider Area Start*/}
        <Slider heading={"SignUp"} />
        {/* slider Area End*/}
        {/*================login_part Area =================*/}
        <section className="login_part section_padding ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="login_part_text text-center">
                  <div className="login_part_text_iner">
                    <h2>Already Have an Account</h2>
                    <p>
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>
                    <Link to="/login" className="btn_3">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="login_part_form">
                  <div className="login_part_form_iner">
                    <h3>
                      Welcome Back ! <br />
                      Please Sign Up now
                    </h3>
                    <div
                      className="alert alert-danger"
                      style={{ display: error ? "" : "none" }}
                    >
                      {error}
                    </div>
                    <div
                      className="alert alert-info"
                      style={{ display: open ? "none" : "" }}
                    >
                      New account is successfully created. Please{" "}
                      <Link to="/login" className="text-primary">
                        Log In
                      </Link>
                    </div>
                    <form
                      onSubmit={this.clickSubmit}
                      className="row contact_form"
                      action="#"
                      method="post"
                      noValidate="novalidate"
                    >
                      <div className="col-md-12 form-group p_star">
                        <input
                          required
                          type="text"
                          value={name}
                          onChange={this.handleChange("name")}
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Username"
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={this.handleChange("email")}
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="email"
                        />
                      </div>

                      <div className="col-md-12 form-group p_star">
                        <input
                          required
                          type="password"
                          value={password}
                          onChange={this.handleChange("password")}
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <input
                          type="file"
                          onChange={this.fileChange}
                          accept="image/*"
                          className="form-control"
                          name="photo"
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        {/* <div className="creat_account d-flex align-items-center">
                    <input type="checkbox" id="f-option" name="selector" />
                    <label htmlFor="f-option">Remember me</label>
                  </div> */}
                        <button type="submit" value="submit" className="btn_3">
                          SignUp
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

const mapDispatchToProps = dispatch => ({
  SignUpAction: user => {
    dispatch(SignUpAction(user));
  }
});

const mapStateToProps = state => {
  return {
    Auth: state.Auth,
    UI: state.UI
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
