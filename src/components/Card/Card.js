import React, { useState } from 'react';

export const Card = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleBlock = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='faq__question'>
      <dt>
        <button
          aria-expanded="false"
          aria-controls="faq1_desc"
          data-qa="faq__question-button"
          className="faq__question-button "
          onClick={handleBlock}
        >
          {title}
        </button>
      </dt>
      <dd>
        {isActive &&
          <p id="faq1_desc" data-qa="faq__desc" className="faq__desc ">{content}</p>
        }
      </dd>
    </div>
  )
}