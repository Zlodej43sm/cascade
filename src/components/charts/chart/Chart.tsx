import { PureComponent, createRef } from 'react';
import type { Static as Highcharts, ChartObject } from 'highcharts';

import ErrorMessage from './ErrorMessage';

export type ChartProps = {
  options: any
  highcharts?: Highcharts
  width?: number
  height?: number
  className?: string
};

export default class Chart extends PureComponent<ChartProps> {
  chart?: ChartObject;

  container = createRef<HTMLDivElement>();

  componentDidMount() {
    const { highcharts = window.Highcharts, options } = this.props;
    if (!highcharts || !highcharts.chart) {
      throw new Error(ErrorMessage.HIGHCHARTS_NOT_DEFINED);
    } else if (!options) {
      throw new Error(ErrorMessage.OPTIONS_NOT_DEFINED);
    } else {
      this.chart = highcharts.chart(this.container.current!, options);
    }
  }

  componentDidUpdate(prevProps: ChartProps) {
    const { highcharts = window.Highcharts, options, width, height } = this.props;
    if (!this.chart) {
      return;
    }

    if (prevProps.options !== options) {
      this.chart.destroy();
      this.chart = highcharts.chart(this.container.current!, options);
    }

    if (prevProps.width !== width || prevProps.height !== height) {
      this.chart.reflow();
    }
  }

  componentWillUnmount() {
    this.chart?.destroy();
    this.chart = undefined;
  }

  render() {
    const { className, width, height } = this.props;
    return <div className={className} style={{ width, height }} ref={this.container} data-testid="chart-wrapper" />;
  }
}
