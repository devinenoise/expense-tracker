import React from 'react';
import ChartBar from './ChartBar';
import classes from './Chart.module.css';

const Chart = props => {
  // transform dataPoints from objects to numbers
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // Math.max wants an array so spreading dataPointValues to pass an array
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className={classes.chart}>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
