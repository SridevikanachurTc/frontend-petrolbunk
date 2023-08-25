//different fuel price in 3 years 
import React from 'react';
import { StackedBarChart } from 'react-native-chart-kit';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

function StackGraph() {

  const data = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ['#00152F', '#001F3F', '#002A4D'],
  };

  const chartWidth = Dimensions.get('window').width * 0.9;

  const chartConfig = {
    backgroundGradientFrom: '#00152F',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#001F3F',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    labelColor: (opacity = 1) => `rgba(0, 31, 63, ${opacity})`, 
  };

  return (
    <View style={styles.container}>
      <Text>Bezier Stack Chart</Text>
      <View style={styles.chartWrapper}>
        <StackedBarChart
          data={data}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
  },
});

export default StackGraph;
