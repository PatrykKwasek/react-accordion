import React, { useRef } from 'react';

import { Button } from '../../Button/Button';

export const AccordionItem = ({ item, isActive, handleToggle }) => {
  const { title, content } = item;
  const contentEl = useRef();

  return (
    <div className='accordion-item'>
      <Button
        txt={title}
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
        <div className='content-description'>{content}</div>
      </div>
    </div>
  )
}