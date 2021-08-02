import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

export class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    console.log("datadtadtdtadtatdadtadt", this.state);
    this.props.signUp(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handlesubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">First name</label>
            <input type="text" id="firstname" onChange={this.handlechange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Last name</label>
            <input type="text" id="lastname" onChange={this.handlechange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handlechange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handlechange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">signup</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.Firebase.auth,
    authError: state.Auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newuser) => dispatch(signUp(newuser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
