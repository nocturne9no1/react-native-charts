# React Native Charts

A chart library for React Native. Currently there is support for vertical bar graphs, with support comming for line graphs, scatter plots, pie charts, progress rings, and horizontal bar graphs.

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

## Bar Graphs

<img src="https://seanwatters.io/images/@chartiful-react-native-bar-charts.png" height="400px" alt="bar graph image">

### Interface

- `height`: number

- `width`: number

- `data`: <Array>number
  
- `labels`?: <Array>string  (defaults to `[1, 2, 3, ...]`)
  
- `barRadius`?: number  (defaults to `0`)

- `barWidthPercentage`?: number  (defaults to `0.7`)

- `barColor`?: string  (defaults to `#000000`)

- `style`?: `ReactNative.StyleSheet`

- `baseConfig`?: `BaseChartConfig`
