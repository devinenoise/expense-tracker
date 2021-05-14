import React from 'react';
import classes from './Card.module.css';

const Card = props => {
  // adding the default .card class plus any props classes with props.className
  const styleClass = classes.card + ' ' + props.className;

  return <div className={styleClass}>{props.children}</div>;
};

export default Card;
