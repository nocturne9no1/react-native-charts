import React from 'react'
import { View } from 'react-native'
import { Svg, G, Path } from 'react-native-svg'
import Pie from 'paths-js/pie'
import { PieChartConfig } from '../../types'

const PieChart = ({
  data,
  height,
  width,
  center,
  style = {}
}: PieChartConfig) => {
  const chart = Pie({
    center: center || [0, 0],
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

  return (
    <View style={style}>
      <Svg width={width} height={height}>
        <G x={width / 2} y={height / 2} >
          {slices}
        </G>
      </Svg>
    </View>
  )
}

export default PieChart
