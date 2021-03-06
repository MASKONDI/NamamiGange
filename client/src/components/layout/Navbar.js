import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Suggestion Box
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NamamiGange
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/ethereum">
                    Ethereum Blockchain
                  </Link>
                  <Link className="dropdown-item" to="/smartcontract">
                    Smart-Contract
                  </Link>
                  <Link className="dropdown-item" to="/realICO">
                    Real World ICO
                  </Link>
                  <Link className="dropdown-item" to="/dapp">
                    Decentralized Application
                  </Link>
                  <Link className="dropdown-item" to="/cryptocurrency">
                    Cryptocurrency
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/lottery">
                    Lottery System
                  </Link>
                  <Link className="dropdown-item" to="/namamigange">
                    NamamiGange Contract
                  </Link>
                  <Link className="dropdown-item" to="/votingapplication">
                    Voting Application
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Developers profile
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
