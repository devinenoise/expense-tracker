import React from 'react';
import classes from './ExpensesFilter.module.css';

const ExpensesFilter = props => {
  // the dropdown event value executes the onChangeFilter function from Expenses.js and passes it as an argument
  const dropdownChangeHandler = event => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilter__control}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
