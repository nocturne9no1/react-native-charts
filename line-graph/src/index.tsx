import React from 'react'
import { View } from 'react-native'
import { Svg, Circle, Polygon, Polyline, Path, G, LinearGradient, Stop } from 'react-native-svg'

import { LineGraphConfig } from '../../types'
import ChartBuilder from '@chartiful/react-native-chart-builder'

const LineChart = ({
  data = [0,0,0,0],
  height,
  width,
  labels,
  hasLine = true,
  lineWidth = 3,
  lineColor = '#000000',
  isBezier,
  hasShadow,
  hasDots = true,
  dotColor = '#000000',
  dotSize = 5,
  style = {},
  baseConfig
}: LineGraphConfig) => {
  const heightAdjustment = (dotSize > lineWidth ? dotSize : lineWidth)

  const chartBuilder = new ChartBuilder({
    data,
    labels,
    height: height - heightAdjustment * 2,
    width,
    ...baseConfig
  })

  const widthAdjustments = (hasDots ? chartBuilder.xAxisLabelPosition === 'right' ? dotSize : -dotSize : 0.01)
  const baseHeight = chartBuilder.baseHeight + (heightAdjustment / 2) - chartBuilder.yAxisLabelHeight

  const calcXPosition = (val: number): number => val
    * (width - chartBuilder.xAxisLabelWidth)
    / (data.length - 1)
    + chartBuilder.leftAlignedXAxisLabelWidth
    + widthAdjustments
  const calcYPosition = (val: number): number => baseHeight
    - chartBuilder.calcDataPointHeight(val)
    + (heightAdjustment / 2)

  const shadowStart = calcXPosition(data.length - 1)
  const shadowEnd = calcXPosition(0)

  const renderDots = () => {
    return data.map((d, i) => {
      return (
        <Circle
          key={Math.random()}
          cx={calcXPosition(i)}
          cy={calcYPosition(d)}
          fill={dotColor}
          r={dotSize}
        />
      )
    })
  }

  const getLinePoints = (): string => {
    return data.map((d, i) => {
      return `${calcXPosition(i)},${calcYPosition(d)}`
    }).join(' ')
  }

  const getBezierLinePath = (): string => {
    if (data.length === 0) { return 'M0,0' }

    const points = data.slice(0, data.length - 1)

    const paths = points.map((_, i) => {
      const xMid = (calcXPosition(i) + calcXPosition(i + 1)) / 2
      const yMid = (calcYPosition(data[i]) + calcYPosition(data[i + 1])) / 2
      const cpX1 = (xMid + calcXPosition(i)) / 2
      const cpX2 = (xMid + calcXPosition(i + 1)) / 2
      return (
        `Q ${cpX1}, ${calcYPosition(data[i])}, ${xMid}, ${yMid}` +
        ` Q ${cpX2}, ${calcYPosition(data[i + 1])}, ${calcXPosition(i + 1)}, ${calcYPosition(data[i + 1])}`
      )
    })

    return [`M${calcXPosition(0)},${calcYPosition(data[0])}`].concat(paths).join(' ')
  }

  const renderLine = () => {
    const points = getLinePoints()
    return (
      <Polyline
        key={Math.random()}
        points={points}
        fill='none'
        stroke={lineColor}
        strokeWidth={lineWidth}
      />
    )
  }

  const renderBezierLine = () => {
    const d = getBezierLinePath()
    return (
      <Path
        key={Math.random()}
        d={d}
        fill='none'
        stroke={lineColor}
        strokeWidth={lineWidth}
      />
    )
  }

  const renderShadow = () => {
    const points = getLinePoints() + ` ${shadowStart},${baseHeight} ${shadowEnd},${baseHeight}`
    return (
      <Polygon
        key={Math.random()}
        points={points}
        fill='url(#shadow)'
        strokeWidth={0}
      />
    )
  }

  const renderBezierShadow = () => {
    const d = getBezierLinePath() + ` L${shadowStart},${baseHeight} L${shadowEnd},${baseHeight} Z`
    return (
      <Path
        key={Math.random()}
        d={d}
        fill='url(#shadow)'
        strokeWidth={0}
      />
    )
  }

  return (
    <View style={style}>
      <Svg height={height} width={width}>
          <LinearGradient
            id='shadow'
            x1={0}
            x2={0}
            y1={0}
            y2={height}
          >
            <Stop
              offset='0'
              stopColor={lineColor}
              stopOpacity={0.1}
            />
            <Stop
              offset='1'
              stopColor={lineColor}
              stopOpacity={0}
            />
          </LinearGradient>
          <G>
            {chartBuilder.hasXAxisBackgroundLines !== false ? chartBuilder.renderXAxisLines() : null}
          </G>
          <G>
            {chartBuilder.hasXAxisLabels !== false ? chartBuilder.renderXAxisLabels() : null}
          </G>
          <G>
            {chartBuilder.hasYAxisLabels !== false ? chartBuilder.renderYAxisLabels() : null}
          </G>
          <G>
            {hasLine ?
              isBezier ? renderBezierLine() : renderLine()
              : null
            }
          </G>
          <G>
            {hasShadow ?
              isBezier ? renderBezierShadow() : renderShadow()
              : null}
          </G>
          <G>
            {hasDots ? renderDots() : null}
          </G>
      </Svg>
    </View>
  )
}

export default LineChart
