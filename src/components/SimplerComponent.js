// Code SimplerComponent Here
import React from 'react';


const SimplerComponent = (props) =>

// <div>{props.handleClick("happy")}</div>

<div onClick={props.handleClick}>I am just happy</div>

export default SimplerComponent;
