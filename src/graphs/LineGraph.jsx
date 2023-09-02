import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState} from 'react';
import AdminGraphApi from '../services/AdminGraphApi';

function LineGraph() {
  // const data = {
  //   labels: ["16", "17", "18"],
  //   datasets: [
  //     {
  //       data: [109.098765432123, 187.976543235678, 102.478694842789],
  //       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
  //       strokeWidth: 2 // optional
  //     }
  //   ],
  // };
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const [data, setData] = useState({
    labels: [],
    datasets: [{data: []}],
  });

  useEffect(() => {
    const fetchTotalReductionPerHour = async () => {
      try {
        const salesData = await AdminGraphApi.getTotalReductionPerHourAllBranches();

        // Format the API response for chart data
        const formattedData = salesData.map(item => ({
          hour: item[0].toString(),
          reduction: item[1],
        }));
        console.log('Sales Data from API:', salesData);

        const labels = formattedData.map(item => item?.hour || 'N/A');
        const reductionData = formattedData.map(item => item?.reduction || 0);

        setData({
          labels: labels,
          datasets: [
            {
              data: reductionData,
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTotalReductionPerHour();
  }, []);

  if (!data.labels.length || !data.datasets[0].data.length) {
    return <Text>Data not available at the moment</Text>;
  }

  const chartWidth = Dimensions.get('window').width * 0.9;

  const chartConfig = {
    backgroundColor: '#001122',
    backgroundGradientFrom: '#00152F',
    backgroundGradientTo: '#001F3F',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sales in Litres per Hour</Text>
      <View style={styles.chartWrapper}>
        <LineChart
          data={data}
          width={chartWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          yAxisSuffix="L"
          bezier
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
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

export default LineGraph;