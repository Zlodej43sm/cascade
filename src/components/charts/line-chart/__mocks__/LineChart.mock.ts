/* eslint-disable import/prefer-default-export */
export const chartArguments = {
  title: {
    text: null,
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: null,
    },
    labels: {
      format: '{value} %',
    },
  },
  xAxis: {
    categories: ['Feb 21', 'Mar 21', 'Apr 21', 'May 21'],
  },
  series: [{
    name: 'Actual',
    data: [100, 90, 70, 53],
  }, {
    name: 'Estimate',
    data: [100, 80, 80, 50],
  }],
};
