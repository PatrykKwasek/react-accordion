import React, { useRef, useState } from 'react';

import { Button } from '../../Button/Button';

export const AccordionItem = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const contentEl = useRef();

  return (
    <div>
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
        <span>{item.content}</span>
      </div>
    </div>
  )
}