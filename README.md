# React Native

A chart library for React Native. Currently there is support for vertical bar graphs, horizontal bar graphs, and line graphs, with support coming for scatter plots, pie charts, progress rings, and heat maps.

- [Base Chart Config](#base-chart-config)
- [Vertical Bar Graph](#vertical-bar-graph)
- [Line Graph](#line-graph)
- [Horizontal Bar Graph](#horizontal-bar-graph)
- [Documentation](#documentation)
- [Contributing](#contributing)

<p align="center">
  <img src="https://seanwatters.io/images/@chartiful-react-native-overview.png" width="550px" alt="bar graph image">
</p>

## Base Chart Config

- `startAtZero` ?: boolean

- `hasXAxisLabels`?: boolean

- `hasYAxisLabels`?: boolean

- `xAxisLabelCount`?: number (defaults to: `4`)

- `xAxisLabelStyle`?: {
    - `fontFamily`?: string
    - `fontSize`?: number
    - `fontWeight`?: number
    - `color`?: string
    - `rotation`?: number
    - `xOffset`?: number
    - `yOffset`?: number
    - `prefix`?: string
    - `suffix`?: string,
    - `position`?: string (accepts: `'left'` or `'right'`. Defaults to: `'left'`)
    - `width`?: number,
    - `decimals`?: number

  }

- `yAxisLabelStyle`?: {
    - `fontFamily`?: string
    - `fontSize`?: number
    - `fontWeight`?: number
    - `color`?: string
    - `rotation`?: number
    - `xOffset`?: number
    - `yOffset`?: number
    - `height`?: number

  }

- `hasXAxisBackgroundLines`?: boolean

- `hasYAxisBackgroundLines`?: boolean

- `xAxisBackgroundLineStyle`?: {
    - `strokeWidth`?: number
    - `color`?: string
    
  }

- `yAxisBackgroundLineStyle`?: {
    - `strokeWidth`?: number
    - `color`?: string

  }

<br>

## Vertical Bar Graph

<p align="left">
  <img src="https://seanwatters.io/images/@chartiful-react-native-vertical-bar-graph.png" width="400px" alt="bar graph image">
</p>

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-vertical-bar-graph
```

- [npm package](https://www.npmjs.com/package/@chartiful/react-native-vertical-bar-graph)

### Example

```jsx
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { View, StyleSheet } from 'react-native';

const config = {
  hasXAxisBackgroundLines: false,
  xAxisLabelStyle: {
    position: 'right',
    prefix: '$'
  }
};

export const YourComponent = () => (
  <View>
    <VerticalBarGraph
      data={[20, 45, 28, 80, 99, 43, 50]}
      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
      width={375}
      height={300}
      barRadius={5}
      barWidthPercentage={0.65}
      baseConfig={config}
      style={styles.chart}
    />
  </View>
);

const styles = StyleSheet.create({
  chart: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    backgroundColor: 'green',
    width: 375
  }
});
```

### Interface

- `height`: number

- `width`: number

- `data`: `<Array>number`

- `labels`?: `<Array>string`  (defaults to `[1, 2, 3, ...]`)

- `barRadius`?: number  (defaults to `0`)

- `barWidthPercentage`?: number  (defaults to `0.7`)

- `barColor`?: string  (defaults to `#000000`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig`

<br>

## Line Graph

<p align="left">
  <img src="https://seanwatters.io/images/@chartiful-react-native-line-graph.png" width="400px" alt="line graph image">
</p>

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-line-graph
```

- [npm package](https://www.npmjs.com/package/@chartiful/react-native-line-graph)

### Example

```jsx
import LineGraph from '@chartiful/react-native-line-graph';
import { View, StyleSheet } from 'react-native';

const config = {
  startAtZero: false,
  hasXAxisBackgroundLines: false,
  xAxisLabelStyle: {
    prefix: '$',
    offset: 0
  }
};

export const YourComponent = () => (
  <View>
    <LineGraph
      data={[10, 15, 7, 20, 14, 12, 10, 20]}
      width={375}
      height={300}
      isBezier
      hasShadow
      baseConfig={config}
      style={styles.chart}
    />
  </View>
);

const styles = StyleSheet.create({
  chart: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 375,
    backgroundColor: 'lightblue'
  }
});
```

### Interface

- `height`: number

- `width`: number

- `data`: `<Array>number`

- `labels`?: `<Array>string`  (defaults to `[1, 2, 3, ...]`)

- `hasLine`?: boolean  (defaults to `true`)

- `lineColor`?: string  (defaults to `'#000000'`)

- `lineWidth`?: number (defaults to `3`)

- `hasDots`?: boolean  (defaulst to `true`)

- `dotColor`?: string  (defaults to `'#000000'`)

- `dotSize`?: number (defaulse to `5`)

- `isBezier`?: boolean  (defaults to `false`)

- `hasShadow`?: boolean  (defaults to `false`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig`

<br>

## Horizontal Bar Graph

<p align="left">
  <img src="https://seanwatters.io/images/@chartiful-react-native-horizontal-bar-graph.png" width="400px" alt="bar graph image">
</p>

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-horizontal-bar-graph
```

- [npm package](https://www.npmjs.com/package/@chartiful/react-native-horizontal-bar-graph)

### Example

```jsx
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import { View, StyleSheet } from 'react-native';

const config = {
  hasYAxisBackgroundLines: false,
  xAxisLabelStyle: {
    rotation: 0,
    fontSize: 12,
    width: 70,
    yOffset: 4,
    xOffset: -15
  },
  yAxisLabelStyle: {
    rotation: 30,
    fontSize: 13,
    prefix: '$',
    position: 'bottom',
    xOffset: 15,
    decimals: 2,
    height: 100
  }
};

export const YourComponent = () => (
  <View>
    <HorizontalBarGraph
      data={[125, 100, 50, 75, 100, 125]}
      labels={['Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
      width={375}
      height={350}
      barRadius={15}
      baseConfig={config}
      style={styles.chart}
    />
  </View>
);

const styles = StyleSheet.create({
  chart: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 375,
    backgroundColor: 'green'
  }
});
```

### Interface

- `height`: number

- `width`: number

- `data`: `<Array>number`

- `labels`?: `<Array>string`  (defaults to `[1, 2, 3, ...]`)

- `barRadius`?: number  (defaults to `0`)

- `barWidthPercentage`?: number  (defaults to `0.7`)

- `barColor`?: string  (defaults to `#000000`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig`

<br>

## Documentation

The full documentation for React Native Charts can be found [here](https://chartiful.io/react-native).

**[NPM](https://www.npmjs.com/search?q=%40chartiful%2Freact-native)**

## Contributing

If interested in helping out, checkout the [Contribution Guide](https://github.com/chartiful/react-native-charts/blob/trunk/CONTRIBUTING.md)!
