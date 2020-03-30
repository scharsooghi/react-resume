import React, { Component } from "react";
import './SkillCard.css'

class SkillCard extends Component {
  render() {
    const { skill } = this.props
    return (
      <div className="card">
        <div className="image-wrapper">
          <i className={skill.content.image}></i>
        </div>
        <div className="skill-title-wrapper">{skill.content.title}</div>
      </div>
    )
  }
}

export default SkillCard