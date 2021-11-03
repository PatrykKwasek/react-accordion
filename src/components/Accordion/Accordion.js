import React from 'react';

import { AccordionItem } from './AccordionItem/AccordionItem';

import { rules } from '../../data/rules';

export const Accordion = () => {

  return (
    <div className='accordion-data'>
      {
        rules.map(item => (
          <AccordionItem
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}