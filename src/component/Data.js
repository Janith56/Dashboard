import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { energyConsumption as data } from './Demodata';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

class Data extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis
            max={2400}
          />

          <BarSeries
            name="Three wheels"
            valueField="threewheel"
            argumentField="time"
          />
          <BarSeries
            name="Trucks"
            valueField="trucks"
            argumentField="time"
          />
          <BarSeries
            name="Vans"
            valueField="vans"
            argumentField="time"
          />
          <BarSeries
            name="Bikes"
            valueField="bikes"
            argumentField="time"
          />
           <BarSeries
            name="Cars"
            valueField="cars"
            argumentField="time"
          />
         
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Traffic count in last few hours" />
          <Stack
            stacks={[
              { series: ['Three wheels', 'Trucks', 'Vans', 'Bikes', 'Cars'] },
            ]}
          />
        </Chart>
      </Paper>
    );
  }
}

export default Data;