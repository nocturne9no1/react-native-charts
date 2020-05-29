# React Native Charts

**[NPM packages](https://www.npmjs.com/org/chartiful)**

A chart library for React Native. Currently there is support for vertical bar graphs, with support coming for line graphs, scatter plots, pie charts, progress rings, and horizontal bar graphs.

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
    - `offset`?: number
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
    - `offset`?: number
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

## Bar Graph

**[NPM package](https://www.npmjs.com/package/@chartiful/react-native-bar-graph)**

<img src="https://seanwatters.io/images/@chartiful-react-native-bar-graph.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-bar-graph
```

### Example

```jsx
import BarGraph from '@chartiful/react-native-bar-graph'

<BarGraph
  data={[20, 45, 28, 80, 99, 43, 50]}
  labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
  width={400}
  height={500}
  barRadius={5}
  barWidthPercentage={0.65}
  barColor='#0d0a0b'
  baseConfig={{
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'right',
      prefix: '$',
      offset: 17.5
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

- `data`: number[]

- `labels`?: string[]  (defaults to `[1, 2, 3, ...]`)

- `barRadius`?: number  (defaults to `0`)

- `barWidthPercentage`?: number  (defaults to `0.7`)

- `barColor`?: string  (defaults to `#000000`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig`

<br>

## Line Graph

**[package](https://www.npmjs.com/package/@chartiful/react-native-line-graph)**

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
