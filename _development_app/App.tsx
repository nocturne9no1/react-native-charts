import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';

import VerticalBarGraph from '../vertical-bar-graph/src/index.tsx';
import LineGraph from '../line-graph/src/index.tsx';
import HorizontalBarGraph from '../horizontal-bar-graph/src/index.tsx';

export default function App() {
  return (
    <ScrollView style={styles.content}>
      <VerticalBarGraph
        data={[20, 45, 28, 80, 99, 43, 50]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
        width={Dimensions.get('window').width - 35}
        height={200}
        barRadius={5}
        barWidthPercentage={0.65}
        barColor='#000000'
        baseConfig={{
          hasXAxisBackgroundLines: false,
          xAxisLabelStyle: {
            position: 'right',
            prefix: '$'
          }
        }}
        style={{ marginBottom: 30, paddingVertical: 10, borderRadius: 30 }}
      />
      <LineGraph
        data={[10, 15, 7, 20, 14, 12, 10, 20]}
        width={Dimensions.get('window').width - 35}
        height={200}
        lineColor='#000000'
        lineWidth={3}
        isBezier
        hasDots={true}
        baseConfig={{
          startAtZero: false,
          hasXAxisBackgroundLines: false,
          xAxisLabelStyle: {
            prefix: '$',
            offset: 0
          }
        }}
        style={{
          marginTop: 20,
          marginLeft: -17.5
        }}
      />
      <HorizontalBarGraph
        data={[125, 100, 50, 75, 100, 125]}
        labels={['Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
        width={Dimensions.get('window').width - 35}
        height={300}
        barRadius={15}
        barColor='#000000'
        baseConfig={{
          hasYAxisBackgroundLines: false,
          xAxisLabelStyle: {
            rotation: 0,
            fontSize: 11,
            width: 60,
            yOffset: 4,
            xOffset: -12
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
        style={{
          marginTop: 20
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 60,
    flex: 1,
    width: Dimensions.get('window').width - 17.5,
    marginLeft: 17.5,
    alignSelf: 'center',
    paddingBottom: 500
  },
});
