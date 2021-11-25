/* eslint-disable import/prefer-default-export */
import { ChartTypes, GrowTypes } from '../NumbersChart';

export const chartArguments = {
  defaultProps: {
    type: ChartTypes.Default,
    value: '11,458',
  },
  growProps: {
    type: ChartTypes.Grow,
    grow: GrowTypes.Up,
    value: '2.3%',
  },
  growDownProps: {
    type: ChartTypes.Grow,
    grow: GrowTypes.Down,
    value: '2.3%',
  },
  differenceProps: {
    type: ChartTypes.Comparison,
    grow: GrowTypes.Up,
    unit: '$',
    value: '11,4M',
    difference: '33.3%',
  },
  differenceDownProps: {
    type: ChartTypes.Comparison,
    grow: GrowTypes.Down,
    unit: '$',
    value: '11,4M',
    difference: '33.3%',
  },
};
