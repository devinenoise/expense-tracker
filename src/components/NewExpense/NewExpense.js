import React, { useState } from 'react';
import classes from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  //defining the state for the add expense button
  const [isEditing, setIsEditing] = useState(false);

  // defining the handler to send the expense data to App.js
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      // adding a new random id to the expenses object
      id: Math.floor(Math.random().toString() * 100)
    };
    // lifting props up to App.js by invoking props.onAddExpense
    // expenseData is passed as an argument
    props.onAddExpense(expenseData);
    // resets the editing expense container
    setIsEditing(false);
  };

  // button handler acts as a boolean toggle
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // function used to pass down to ExpenseForm for the cancel button
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes.newExpense}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEdit={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
