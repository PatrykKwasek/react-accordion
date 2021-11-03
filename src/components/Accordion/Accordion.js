import React, { useState } from 'react';

import { AccordionItem } from './AccordionItem/AccordionItem';

import { rules } from '../../data/rules';

export const Accordion = () => {
  const [itemIndex, setItemIndex] = useState('0');

  const handleToggle = (id) => {
    if (itemIndex === id) {
      setItemIndex('0');
    }

    setItemIndex(id);
  }

  return (
    <div className='accordion-data'>
      {
        rules.map(item => (
          <AccordionItem
            key={item.id}
            handleToggle={() => handleToggle(item.id)}
            isActive={itemIndex === item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}