import Highcharts from 'highcharts';
import more from 'highcharts/highcharts-more'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

more(Highcharts)
window.Highcharts = Highcharts
