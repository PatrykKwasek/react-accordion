import React from 'react';

export const Button = ({ txt, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {txt}
    </button>
  )
}