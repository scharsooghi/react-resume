import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";


import data from "../data.json";
import "./TitleSection.css";

import { Link, Element } from 'react-scroll';
import { SocialIcon } from "react-social-icons";

class TitleSection extends Component {
  render() {
    return (
      <div>
        <Element name="title" className="element">
        </Element>
        <Fullpage className="first" background={this.props.background} color={this.props.color}>
          <div><img className="profile" src={data.icons[2].img} alt="" />
          </div>
          <h1>{data.title}</h1>
          <div>
            <h3>{data.subtitle}</h3>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} target="_blank" bgColor={this.props.color} />
                </div>
              );
            })}
          </div>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
            <DownIcon color={this.props.color} />
          </Link>
        </Fullpage>
      </div>
    );
  }
}

export default TitleSection;
