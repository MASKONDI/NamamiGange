import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Cryptocurrency extends Component {
  componentDidMount() {
    //if (this.props.auth.isAuthenticated) {
    // this.props.history.push("/dashboard");
    //}
  }

  render() {
    return (
      <div className="cryptocurrency">
        <div className="card-body">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8" styles="margin-top:30px" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cryptocurrency.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Cryptocurrency);
