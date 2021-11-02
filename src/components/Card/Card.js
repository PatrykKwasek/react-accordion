import React, { useState } from 'react';

export const Card = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleBlock = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='faq-item'>
      <h4 onClick={handleBlock}>{title}</h4>
      {isActive && <p>{content}</p>}
    </div>
  )
}