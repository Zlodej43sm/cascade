import React from 'react';
import ReactDOM from 'react-dom';

import EmberStream from 'lib/components/ember-integration/EmberStream';
import EmberPropsWrapper from 'lib/components/ember-integration/EmberPropsWrapper';
import BarChart from 'lib/components/charts/bar-chart/BarChart';
import LineChart from 'lib/components/charts/line-chart/LineChart';
import PieChart from 'lib/components/charts/pie-chart/PieChart';
import BubbleChart from 'lib/components/charts/bubble-chart/BubbleChart';
import NumbersChartCard, { NumbersChart } from 'lib/components/charts/numbers-chart/NumbersChart';
import TableChartCard, { TableChart } from 'lib/components/charts/table-chart/TableChart';
import InviteDialog from 'lib/components/dialogs/invite-dialog/InviteDialog';
import MessageDialog from 'lib/components/dialogs/message-dialog/MessageDialog';
import ExampleComponent from 'lib/components/ember-integration/examples/example2/ExampleComponent';
import Button from 'lib/components/buttons/button/Button';
import CloseButton from 'lib/components/buttons/close-button/CloseButton';
import InputField from 'lib/components/forms/input-field/InputField';
import TextAreaField from 'lib/components/forms/text-area-field/TextAreaField';

/**
 * Renders (mount) a react component to the chosen html element
 * @param {Element | DocumentFragment} htmlNode. e.g., reference to <div>
 * @param {React.ComponentType<any>>} Component. e.g., <HelloWorld />
 * @param {options} options arguments. e.g., {name:'test', id: 234}
 */
const mountReactComponent = (htmlNode: Element | DocumentFragment | null, Component: React.ComponentType<any>, options: any) => {
  // eslint-disable-next-line no-console
  console.log(`mountReactComponent(htmlNode = ${htmlNode}, Component = ${Component}, options = ${options})`);
  ReactDOM.render(<Component {...options} />, htmlNode);
};

/**
 * Removes a mounted React component from the DOM and
 * cleans up its event handlers and state.
 * @param {Element | DocumentFragment} htmlNode. e.g., reference to <div>
 */
const unmountReactElement = (htmlNode: Element | DocumentFragment) => {
  ReactDOM.unmountComponentAtNode(htmlNode);
};

/*
 I hate this solution, and open for direct imports approach if you know how to do it within Ember
 */
// @ts-ignore
window.ReactLibrary = {
  EmberStream,
  mountReactComponent,
  unmountReactElement,
  BarChart: EmberPropsWrapper(BarChart),
  LineChart: EmberPropsWrapper(LineChart),
  PieChart: EmberPropsWrapper(PieChart),
  BubbleChart: EmberPropsWrapper(BubbleChart),
  NumbersChart: EmberPropsWrapper(NumbersChart),
  NumbersChartCard: EmberPropsWrapper(NumbersChartCard),
  ExampleComponent: EmberPropsWrapper(ExampleComponent),
  TableChart: EmberPropsWrapper(TableChart),
  TableChartCard: EmberPropsWrapper(TableChartCard),
  InviteDialog: EmberPropsWrapper(InviteDialog),
  MessageDialog: EmberPropsWrapper(MessageDialog),
  Button: EmberPropsWrapper(Button),
  CloseButton: EmberPropsWrapper(CloseButton),
  InputField: EmberPropsWrapper(InputField),
  TextAreaField: EmberPropsWrapper(TextAreaField),
};
