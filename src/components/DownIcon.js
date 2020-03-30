import React, { Component } from 'react';
import './DownIcon.css'

class DownIcon extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="downArrow downLink"
                style={{
                    color: this.props.color
                }}>
            </div>
        )
    }
}

export default DownIcon