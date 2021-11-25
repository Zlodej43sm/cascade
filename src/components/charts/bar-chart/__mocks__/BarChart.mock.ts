/* eslint-disable import/prefer-default-export */
export const chartArguments = {
  chart: {
    type: 'column',
  },
  title: {
    text: null,
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    },
  },
  xAxis: {
    categories: ['Aggressive Growth', 'Best Manufactured', 'Modern Manufactured', 'Top Places to Work'],
  },
  yAxis: {
    min: 0,
    max: 20,
    title: {
      text: 'Goals',
    },
  },
  series: [{
    name: 'John',
    data: [4, 7, 4, 3],
  }, {
    name: 'Jane',
    data: [2, 2, 1, 1],
  }, {
    name: 'Joe',
    data: [2, 2, 2, 1],
  }, {
    name: 'Kake',
    data: [2, 4, 3, 2],
  }, {
    name: 'Moke',
    data: [2, 1, 3, 1],
  }],
};
