// manager staff customer
import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

function RingGraph() {
  const data = {
    labels: ['Swim', 'Bike', 'Run'],
    data: [0.4, 0.6, 0.8],
  };

  const chartWidth = Dimensions.get('window').width * 0.9;

  const chartConfig = {
    backgroundColor: '#001122',
    backgroundGradientFrom: '#00152F',
    backgroundGradientTo: '#001F3F',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={styles.container}>
      <Text>Bezier Ring Chart</Text>
      <ProgressChart
        data={data}
        width={chartWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
});

export default RingGraph;