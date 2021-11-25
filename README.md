# Cascade React Library
Cascade React components library.
Library is being compiled by [Parcel](https://parceljs.org/) - web application bundler.

## Prerequisites
You will need the following things properly installed on your computer.
* [Node.js](http://nodejs.org/) (>= v12.XX.X)
* [Yarn](https://yarnpkg.com/)

## Installation
* `yarn install`

## Launch storybook
* `yarn storybook`
* `yarn build-storybook`

## Launch tests
* `yarn test`
* `yarn test-watch` - launch tests watcher
* `yarn test-coverage` - show project test coverage
* `yarn lint` - check linter manually
* `yarn test -u` to update snapshots


## Make a build
* `yarn build`

## Project source code structure
```bash
src
`-- src/components
    |-- src/components/charts
    |   |-- src/components/charts/chart #chart base class
    |   |   |-- src/components/charts/chart/Chart.tsx #chart component file
    |   |   `-- src/components/charts/chart/tests #chart tests
    |   |       |-- src/components/charts/chart/tests/Chart.test.tsx #chart test file
    |   |       `-- src/components/charts/chart/tests/__snapshots__ #chart snapshots
    |   |           `-- src/components/charts/chart/tests/__snapshots__/Chart.test.tsx.sna
    |   |-- src/components/charts/chart-name-package #various charts boilerplate example
    |   |   |-- src/components/charts/chart-name-package/ChartName.tsx #charts component file
    |   |   |-- src/components/charts/chart-name-package/__mocks__ #chart component mocks data
    |   |   |   `-- src/components/charts/chart-name-package/__mocks__/ChartName.mock.ts
    |   |   `-- src/components/charts/chart-name-package/stories  #chart component storybooks
    |   |       `-- src/components/charts/chart-name-package/stories/ChartName.stories.tsx
    `-- src/components/ember-integration
        |-- src/components/ember-integration/EmberStream.ts #ember stream interface
        |-- src/components/ember-integration/BaseComponent.tsx #ember integration base component
        |-- src/components/ember-integration/EmberPropsWrapper.tsx #transform ember stream to react props
        `-- src/components/ember-integration/examples
           |-- src/components/ember-integration/examples/example2 #example using MobX
           |    |-- src/components/ember-integration/examples/example2/ExampleComponent.tsx
           |    `-- src/components/ember-integration/examples/example2/tests
           |       |-- src/components/ember-integration/examples/example2/tests/__snapshots__
           |       |   `-- src/components/ember-integration/examples/example2/tests/__snapshots__/ExampleComponent.test.tsx.snap
           |       `-- src/components/ember-integration/examples/example2/tests/ExampleComponent.test.tsx
           `-- src/components/ember-integration/examples/example #example using React props
               |-- src/components/ember-integration/examples/example/ExampleComponent.tsx
               `-- src/components/ember-integration/examples/example/tests
                   |-- src/components/ember-integration/examples/example/tests/__snapshots__
                   |   `-- src/components/ember-integration/examples/example/tests/__snapshots__/ExampleComponent.test.tsx.snap
                   `-- src/components/ember-integration/examples/example/tests/ExampleComponent.test.tsx
```

## Usage in Ember
```typescript jsx
{{react-component
  reactComponent="ExampleComponent"
  name="Test name 1"
  data=settings
  callback=functionInController
}}

{{react-component reactComponent="NumbersChartCard"
  icon="#"
  title="Number Chart"
  subtitle="test subtitle"
  value=13
  unit="S"
  difference=22
  grow="down"
  callback=doAlert
}}
```

