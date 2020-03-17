import React from 'react';

function Title(props) {
  return (
    <>
      {props.paragraph ?
        <p className='text-warning'>
          {props.title}
          {props.children}
        </p>
        :
        <h3>{props.title}</h3>
      }
    </>
  )
}

export default Title;
