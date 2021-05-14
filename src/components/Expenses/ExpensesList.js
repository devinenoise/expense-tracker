import React from 'react';
import classes from './ExpensesList.module.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  // conditionally rendering the expenses based on the filteredYear
  // default is a p tag, otherwise render the expenses as a list

  if (props.items.length === 0) {
    return <p className={classes.expenses}>No expenses found</p>;
  }

  return (
    <ul className={classes.expensesList}>
      {props.items.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
