import React, { Component } from "react";
import { Link } from 'react-scroll';
import data from "../data.json";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar" style={{ color: this.props.color }}>
        <div className="leftNav" onClick={this.props.changeColor}>
          <i className={data.icons[1].img} style={{ fontSize: 25 }}></i>
        </div>
        <div className="rightNav">
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
            <div>
              About
            </div>
          </Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
            <div>
              Skills
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
