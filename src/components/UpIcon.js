import React from 'react';
import data from "../data.json";
import './UpIcon.css'

const UpIcon = (props) => {
    return (
        <div onClick={props.onClick} className="upArrow" >
            <i className={data.icons[0].img} ></i>
        </div>
    )
}

export default UpIcon