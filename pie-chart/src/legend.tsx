import React from 'react'
import { View } from 'react-native'
import { Svg, G, Text, Circle } from 'react-native-svg'
import { LegendConfig } from '../../types'

const Legend = ({
  data,
  height,
  width,
  xOffset,
  dotSize,
  fontFamily,
  fontSize,
  fontWeight
}: LegendConfig) => {

  const slotHeight: number = (height + dotSize) / data.length

  const renderDots = () => {
    return data.map((obj: {volume: number, label: string, color: string}, i) => {
      return (
        <Circle
          key={Math.random()}
          cx={xOffset}
          cy={i * slotHeight + fontSize}
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
          x={xOffset + 10}
          y={i * slotHeight + fontSize}
          textAnchor='start'
          fontFamily={fontFamily}
          fontSize={fontSize || 12}
          fontWeight={fontWeight}
          fill='#000000'
        >
          {obj.label}
        </Text>
      )
    })
  }

  return (
    <>
      <G>
        {renderLabels()}
      </G>
      <G>
        {renderDots()}
      </G>
    </>
  )
}

export default Legend
