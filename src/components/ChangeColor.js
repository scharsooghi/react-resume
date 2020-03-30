import React, { Component } from "react";

import Navbar from "./Navbar";
import TitleSection from "../sections/TitleSection";
import AboutSection from "../sections/AboutSection";
import SkillSection from "../sections/SkillSection";

import SnowStorm from 'react-snowstorm';

class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      background: this.props.background
    };
  }

  chColor = () => {
    const colors = ["red", "green", "blue", "orange", "gray"];
    this.setState({
      color: `${colors[Math.floor(Math.random() * colors.length)]}`,
      background: `#DCEDC8`
    });
  };

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
        <Navbar changeColor={this.chColor} color={this.state.color} />
        <SnowStorm animationInterval="50" snowCharacter="*" vMaxY={2} vMaxX={2} />
        <TitleSection color={this.state.color} background={this.state.background} />
        <AboutSection color={this.state.color} background={this.state.background} />
        <SkillSection color={this.state.color} background={this.state.background} />
      </div>
    )
  }
}

export default ChangeColor
