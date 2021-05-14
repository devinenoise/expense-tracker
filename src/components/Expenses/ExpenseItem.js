import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import classes from './ExpenseItem.module.css';

const ExpenseItem = props => {
  return (
    <li>
      <Card className={classes.expenseItem}>
        <ExpenseDate date={props.date} />
        {/* <div>{props.date.toDateString()}</div> */}
        <div className={classes.expenseItem__description}>
          <h2>{props.title}</h2>
          <p className={classes.expenseItem__price}>${props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
