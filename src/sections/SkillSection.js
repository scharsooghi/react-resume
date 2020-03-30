import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import SkillCards from "../components/SkillCard";
import UpIcon from "../components/UpIcon";

import data from "../data.json";

import './SkillSection.css';

import { Link, Element } from 'react-scroll';

class SkillSection extends Component {
  render() {
    return (
      <div>
        <Element name="skills" className="element">
        </Element>
        <Fullpage className="third" background={this.props.background} color={this.props.color}>
          <h1>{data.sections[1].title}</h1>
          <div className="cards-wrapper">
            {data.sections[1].items.map(eachSkill => {
              return (
                <SkillCards skill={eachSkill} />
              );
            })}
          </div>
          <Link activeClass="active" to="title" spy={true} smooth={true} offset={50} duration={500}>
            <UpIcon />
          </Link>
        </Fullpage>
      </div>
    );
  }
}

export default SkillSection;
