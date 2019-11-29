import React from 'react';

const Button = (props) => {
  return (
    <div 
        className = 'button'
        onClick = {props.click} >
        <div>{props.letter}</div>
    </div>
  );
}

export default Button;