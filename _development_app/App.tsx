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
        width={Dimensions.get('window').width - 90}
        height={200}
        barRadius={5}
        barWidthPercentage={0.65}
        barColor='#53ae31'
        baseConfig={{
          hasXAxisBackgroundLines: false,
          xAxisLabelStyle: {
            position: 'right',
            prefix: '$'
          }
        }}
        style={{
          marginBottom: 30,
          padding: 10,
          paddingTop: 20,
          borderRadius: 20,
          backgroundColor: `#dff4d7`,
          width: Dimensions.get('window').width - 70
        }}
      />
      <LineGraph
        data={[10, 15, 7, 20, 14, 12, 10, 20]}
        width={Dimensions.get('window').width - 90}
        height={200}
        lineColor='#347975'
        dotColor='#347975'
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
          marginBottom: 30,
          padding: 10,
          paddingTop: 20,
          borderRadius: 20,
          width: Dimensions.get('window').width - 70,
          backgroundColor: `#dbf0ef`
        }}
      />
      <HorizontalBarGraph
        data={[125, 100, 50, 75, 100, 125]}
        labels={['Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
        width={Dimensions.get('window').width - 100}
        height={225}
        barRadius={7}
        barColor='#82d551'
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
            yOffset: -10,
            decimals: 2,
            height: 50
          }
        }}
        style={{
          marginBottom: 30,
          padding: 10,
          paddingTop: 20,
          borderRadius: 20,
          width: Dimensions.get('window').width - 155,
          backgroundColor: `#e1f5d6`
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 60,
    flex: 1,
    width: Dimensions.get('window').width - 55,
    marginLeft: 17.5,
    alignSelf: 'center',
    paddingBottom: 500
  },
});
