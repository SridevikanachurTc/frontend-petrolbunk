// import React from 'react';
// import { BarChart } from 'react-native-chart-kit';
// import { View, Text, Dimensions, StyleSheet } from 'react-native';

// function BarGraph() {
//   const data = {
//     labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43],
//       },
//     ],
//   };

//   const chartWidth = Dimensions.get('window').width * 0.9;

//   const chartConfig = {
//     backgroundGradientFrom: '#00152F',
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: '#001F3F',
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(0, 41, 90, ${opacity})`,
//     strokeWidth: 2,
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false,
//     labelColor: (opacity = 1) => `rgba(0, 31, 63, ${opacity})`,
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Bezier Bar Chart</Text>
//       <View style={styles.chartWrapper}>
//         <BarChart
//           data={data}
//           width={chartWidth}
//           height={250}
//           yAxisLabel="$"
//           chartConfig={chartConfig}
//           verticalLabelRotation={30}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5
//   },
//   chartWrapper: {
//     borderRadius: 16,
//     overflow: 'hidden',
//   },
// });

// export default BarGraph;
import React, { useCallback, useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import AdminGraphApi from '../services/AdminGraphApi';
import { useFocusEffect } from '@react-navigation/native';

function BarGraph() {
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [{ data: [] }]
  });


    const fetchSalesData = useCallback(async () => {
      try {
        const salesData = await AdminGraphApi.getBunkVSales(); // Using getBunkVSales instead of getFuelSales
        const labels = salesData.map(sale => sale.name);
        const data = salesData.map(sale => Math.round(sale.salesCount));
        console.log('labels', labels);
        console.log('dataset', data);

        setGraphData({
          labels: labels,
          datasets: [{ data: data }]
        });
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    }, []);  

   


  useFocusEffect(
    useCallback(() => {
      fetchSalesData();
      return () => {};  
    }, [fetchSalesData])
  );

  const chartWidth = Dimensions.get('window').width * 0.9;

  const chartConfig = {
    backgroundColor: '#001122',
    backgroundGradientFrom: '#00152F',
    backgroundGradientTo: '#001F3F',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sales in Litres vs Branches</Text>
      <View style={styles.chartWrapper}>
        <BarChart
          data={graphData}
          width={chartWidth}
          height={280}
          yAxisSuffix="L"
          chartConfig={chartConfig}
          verticalLabelRotation={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  chartWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  heading: {
    color: '#001F3F',
    padding: 5,
    margin: 10,
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BarGraph;
