import React from 'react';

const Button = ({ letter, click }) => {
  return (
    <div className='tc grow h3 w3 f3 georgia b bg-light-green br3 pa3 ma2 mv4 dib bw2 shadow-5'
      onClick = {click}
    >
        <span>{letter}</span>
    </div>
  );
}

export default Button;