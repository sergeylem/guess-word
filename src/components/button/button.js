import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <div className='button'
      onClick = {props.click} >
        <span>{props.letter}</span>
    </div>
  );
}

export default Button;