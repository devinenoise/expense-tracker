import React, { useState } from 'react';
import './index.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// defining initial state outside of the App function
const initExpenses = [
  {
    id: 'e1',
    date: new Date(2021, 7, 14),
    title: 'Toilet Paper',
    amount: 94.12
  },
  { id: 'e2', date: new Date(2021, 2, 12), title: 'New TV', amount: 799.49 },
  {
    id: 'e3',
    date: new Date(2021, 2, 28),
    title: 'Car Insurance',
    amount: 294.67
  },
  {
    id: 'e4',
    date: new Date(2021, 5, 12),
    title: 'New Desk',
    amount: 450
  },
  {
    id: 'e5',
    date: new Date(2019, 1, 12),
    title: 'Burger',
    amount: 4.11
  },
  {
    id: 'e6',
    date: new Date(2018, 3, 19),
    title: 'Office Chair',
    amount: 99.75
  }
];

const App = () => {
  // useState always returns an array with the initial current state value and an updated function usually prefixed with 'set' to update a new value to the initial state
  const [expenses, setExpenses] = useState(initExpenses);

  // passing prevExpenses as old state argument to update state with new expense and then spreading it in the array with the return statement to update the DOM
  // this is best practice when previous state matters
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 className='appTitle'>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
