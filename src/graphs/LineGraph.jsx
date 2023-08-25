//sales in year
import React, {useState, useEffect} from 'react';
import {LineChart} from 'react-native-chart-kit';
import {View, Text, Dimensions} from 'react-native';

function LineGraph() {
  const [data, setData] = useState([Math.random() * 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data.length < 6) {
        setData(prevData => [...prevData, Math.random() * 100]);
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [data]);

  const chartWidth = Dimensions.get('window').width * 0.9;

  return (
    <View style={styles.container}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: [
            'Jan',
            'Feb',
            'March',
            'April',
            'May',
            'June',
          ].slice(0, data.length),
          datasets: [{data}],
        }}
        width={chartWidth}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#001122',
          backgroundGradientFrom: '#00152F',
          backgroundGradientTo: '#001F3F',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#001F3F',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}


const styles = {
    container: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

export default LineGraph;
