/* eslint-disable import/prefer-default-export */
export const chartArguments = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  title: {
    text: null,
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Australian',
      y: 10,
    }, {
      name: 'TSI',
      y: 10,
    }, {
      name: 'Aboriginal',
      y: 10,
    }, {
      name: 'Not Australian',
      y: 70,
    }],
  }],
};
