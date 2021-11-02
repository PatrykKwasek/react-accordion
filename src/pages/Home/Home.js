import React, { useState } from "react";

import { Accordion } from "../../components/Accordion/Accordion";
import { Header } from "../../components/Header/Header";

import './Home.css';

export const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Accordion />
    </div>
  )
}