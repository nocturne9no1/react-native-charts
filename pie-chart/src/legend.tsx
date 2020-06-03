import React from 'react'
import { View } from 'react-native'
import { Svg, G, Text, Circle } from 'react-native-svg'
import { LegendConfig } from '../../types'

const Legend = ({
  data,
  height,
  width,
  dotSize,
  fontFamily,
  fontSize,
  fontWeight,
  style = {}
}: LegendConfig) => {

  const slotHeight: number = height / data.length

  const renderDots = () => {
    return data.map((obj: {volume: number, label: string, color: string}, i) => {
      return (
        <Circle
          key={Math.random()}
          cx={0}
          cy={i * slotHeight}
          fill={obj.color}
          r={dotSize}
        />
      )
    })
  }

  const renderLabels = () => {
    return data.map((obj: {volume: number, label: string, color: string}, i) => {
      return (
        <Text
          key={Math.random()}
          x={0}
          y={i * slotHeight}
          textAnchor='start'
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={'#000000'}
        >
          {obj.label}
        </Text>
      )
    })
  }

  return (
    <View style={style}>
      <Svg width={width} height={height}>
        <G>
          {renderLabels()}
        </G>
        <G>
          {renderDots()}
        </G>
      </Svg>
    </View>
  )
}

export default Legend
