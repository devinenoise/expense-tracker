import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ];

  // for loop through the expenses props
  for (const expense of props.expenses) {
    // month value matches the index position of the chart month labels
    const expenseMonth = expense.date.getMonth(); // starting at 0 = Jan
    // increase value of a given month by that month's expense amount
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
