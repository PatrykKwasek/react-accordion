import React, { useState } from "react";

import { Card } from "../../components/Card/Card";

import { rules } from "../../data/rules";

import './Home.scss';

export const Home = () => {
  return (
    <div>
      <header>
        <h2>FAQ</h2>
      </header>

      {rules.map(item => (
        <Card
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  )
}