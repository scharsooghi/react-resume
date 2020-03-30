import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";

import data from "../data.json";

import './AboutSection.css';

import { Link, Element } from 'react-scroll';

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Element name="about" className="element">
        </Element>
        <Fullpage className="second" background={this.props.background} color={this.props.color}>
          <h1>{data.sections[0].title}</h1>
          <div>
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
            <DownIcon onClick={() => console.log("I am here")} />
          </Link>
        </Fullpage>
      </div>
    );
  }
}

export default AboutSection;
