import React, { useState } from 'react';
import classes from './Expenses.module.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

const Expenses = props => {
  // setting the state hook for the year filter
  const [filteredYear, setFilteredYear] = useState('2021');

  // change handler to pass the selected year and update state
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // filter method returns a new array
  const filteredExpenses = props.items.filter(expense => {
    // return true if there's a date that matches the filteredYear
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={classes.expenses}>
      {/* ExpensesFilter is known as a controlled component */}
      <ExpensesFilter
        selected={filteredYear} // two-way binding for the selectedYear state slice
        onChangeFilter={filterChangeHandler} // setting props for year filter
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
