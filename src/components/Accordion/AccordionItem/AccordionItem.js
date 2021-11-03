import React, { useRef, useState } from 'react';

import { Button } from '../../Button/Button';

export const AccordionItem = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const contentEl = useRef();

  return (
    <div className='accordion-item'>
      <Button
        txt={item.title}
        onClick={handleToggle}
        className='title'
      />

      <div
        ref={contentEl}
        className='content'
        style={
          isActive
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className='content-description'>{item.content}</div>
      </div>
    </div>
  )
}