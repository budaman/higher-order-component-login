import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return (
        <button
          onClick={() => {
            this.props.authenticate(false);
          }}
        >
          Sign Out
        </button>
      );
    }

    return (
      <button
        onClick={() => {
          this.props.authenticate(true);
        }}
      >
        Sign In
      </button>
    );
  }
  render() {
    return (
      <nav className="navbar ">
        <ul className="navbar-nav navbar-cont">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="resources">Resources</Link>
          </li>
          <li>{this.authButton()} </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
