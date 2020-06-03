import React from 'react'
import { View } from 'react-native'
import { Svg, G, Path } from 'react-native-svg'
import Pie from 'paths-js/pie'
import Legend from './legend'
import { PieChartConfig } from '../../types'

const PieChart = ({
  data,
  height,
  width,
  center,
  hasLegend,
  legendWidth = 112,
  legendHeight = height,
  style = {}
}: PieChartConfig) => {
  const newCenter = [(center || [0, 0])[0] - (legendWidth / 2 || 0), (center || [0,0])[1] || 0]
  const chart = Pie({
    center: newCenter,
    r: 0,
    R: height / 2,
    data,
    accessor: (x: any) => { return x.volume }
  })

  const slices = chart.curves.map((curve: any) => {
    return (
      <G key={Math.random()}>
        <Path d={curve.sector.path.print()} fill={curve.item.color} />
      </G>
    )
  })

  const renderLegend = () => {
    return (
      <Legend
        data={data}
        height={legendHeight}
        width={legendWidth}
        dotSize={3}
        fontFamily='Avenir'
        fontWeight={400}
        fontSize={12}
        xOffset={width - legendWidth}
        style={{marginLeft: width}}
      />
    )
  }

  return (
    <View style={style}>
      <Svg width={width} height={height}>
        <G x={width / 2} y={height / 2} >
          {slices}
        </G>
        {hasLegend ? renderLegend() : null}
      </Svg>
    </View>
  )
}

export default PieChart
