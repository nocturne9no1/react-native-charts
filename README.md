# React Native Charts

**[NPM packages](https://www.npmjs.com/org/chartiful)**

A chart library for React Native. Currently there is support for vertical bar graphs, horizontal bar graphs, and line graphs, with support coming for scatter plots, pie charts, progress rings, and heat maps.

## BaseChartConfig

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

**[NPM package](https://www.npmjs.com/package/@chartiful/react-native-vertical-bar-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-vertical-bar-graph.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-vertical-bar-graph
```

### Example

```jsx
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'

<VerticalBarGraph
  data={[20, 45, 28, 80, 99, 43, 50]}
  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
  width={Dimensions.get('window').width - 35}
  height={Dimensions.get('window').width / 7 + 225}
  barRadius={5}
  barWidthPercentage={0.65}
  baseConfig={{
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'right',
      prefix: '$'
    }
  }}
  style={{
    paddingVertical: 10
  }}
/>
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

- `baseConfig`?: `BaseChartConfig` (found here: [link](https://github.com/chartiful/react-native-charts#readme))

<br>

## Line Graph

**[NPM package](https://www.npmjs.com/package/@chartiful/react-native-line-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-line-graph.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-line-graph
```

### Example

```jsx
import LineGraph from '@chartiful/react-native-line-graph'

<LineGraph
  data={[10, 15, 7, 20, 14, 12, 10, 20]}
  width={375}
  height={300}
  isBezier
  hasShadow
  baseConfig={{
    startAtZero: false,
    hasXAxisBackgroundLines: false
  }}
  style={{
    marginTop: 30
  }}
/>
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

**[NPM package](https://www.npmjs.com/package/@chartiful/react-native-horizontal-bar-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-horizontal-bar-graph.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-horizontal-bar-graph
```

### Example

```jsx
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph'

<HorizontalBarGraph
  data={[125, 100, 50, 75, 100, 125]}
  labels={['Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
  width={375}
  height={350}
  barRadius={15}
  baseConfig={{
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
  }}
/>
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

- `baseConfig`?: `BaseChartConfig` (found here: [link](https://github.com/chartiful/react-native-charts#readme))
