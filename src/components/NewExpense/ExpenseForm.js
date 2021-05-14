import React, { useState } from 'react';
import classes from './ExpenseForm.module.css';

const ExpenseForm = props => {
  //defining three hooks for the three individual form elements
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // default event object with onChange prop
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault(); // stops browser from reloading
    const expenseData = {
      // using the three slices of state from the hooks
      title: enteredTitle,
      amount: +enteredAmount,
      // turning enteredDate into a new Date object
      date: new Date(enteredDate)
    };
    // executing a function that's defined through props on the parent NewExpense.js component and passing the expenseData object as an argument
    props.onSaveExpenseData(expenseData);
    // resetting state back to empty string for two-way binding
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    // onSubmit is an default browser event to a form element
    <form onSubmit={submitHandler}>
      <div className={classes.newExpense__controls}>
        <div className={classes.newExpense__control}>
          <label>Title</label>
          <input
            type='text'
            // setting the value with the slice of state creates two-way binding and clears the form when state updates onSubmit
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.newExpense__control}>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes.newExpense__control}>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes.newExpense__actions}>
        <button type='button' onClick={props.onCancelEdit}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
