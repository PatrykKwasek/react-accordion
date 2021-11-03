import React from "react";

import { Accordion } from "../../components/Accordion/Accordion";

import './Home.scss';

export const Home = () => {
  return (
    <div className="app">
      <h2 className='header'>FAQ</h2>

      <Accordion />
    </div>
  )
}