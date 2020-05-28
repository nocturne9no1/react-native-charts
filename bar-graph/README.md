
## Bar Graphs

<img src="https://seanwatters.io/images/@chartiful-react-native-bar-charts.png" height="400px" alt="bar graph image">

### Installation

```bash
npm i @chartiful/react-native-chart-builder @chartiful/react-native-bar-graphs
```

### Example

```jsx
import BarGraph from '@chartiful/react-native-bar-graphs'

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
