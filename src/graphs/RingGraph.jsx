// // manager staff customer
// import React, { useCallback, useState } from 'react';
// import {ProgressChart} from 'react-native-chart-kit';
// import {View, Text, Dimensions, StyleSheet} from 'react-native';
// import AdminGraphApi from '../services/AdminGraphApi';
// import { useFocusEffect } from '@react-navigation/native';

// function RingGraph() {
//   const [managerCount, setManagerCount] = useState(0);
//   const [staffCount, setStaffCount] = useState(0);

//       const fetchData = useCallback(async () => {
//           try {
//               const mCount = await AdminGraphApi.getManagerCount();
//               const sCount = await AdminGraphApi.getStaffCount();
//               console.log(mCount);
//               console.log(sCount);
//               setManagerCount((mCount/100));
//               setStaffCount((sCount/100));
//           } catch (error) {
//               console.error('Error fetching user counts:', error);
//           }
//         }, []); 
   

//       useFocusEffect(
//         useCallback(() => {
//           fetchData();
//           return () => {};  
//         }, [fetchData])
//       );

//   const data = {
//       labels: ['Manager', 'Staff'],
//       data: [managerCount, staffCount],
//   };

//   const chartWidth = Dimensions.get('window').width * 0.9;

//   const chartConfig = {
//     backgroundColor: '#001122',
//     backgroundGradientFrom: '#00152F',
//     backgroundGradientTo: '#001F3F',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16,
//     },
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Employee Count</Text>
//       <ProgressChart
//         data={data}
//         width={chartWidth}
//         height={220}
//         strokeWidth={16}
//         radius={32}
//         chartConfig={chartConfig}
//         hideLegend={false}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     // flex: 1,
//   },
//   heading: {
//     color: '#001F3F',
//     padding: 5,
//     margin: 10,
//     marginTop: 15,
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//     width: '90%',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// export default RingGraph;


import React, { useCallback, useState } from 'react';
import { BarChart } from 'react-native-chart-kit'; // Import BarChart
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import AdminGraphApi from '../services/AdminGraphApi';
import { useFocusEffect } from '@react-navigation/native';

function RingGraph() {
    const [managerCount, setManagerCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);

    const fetchData = useCallback(async () => {
        try {
            const mCount = await AdminGraphApi.getManagerCount();
            const sCount = await AdminGraphApi.getStaffCount();
            console.log(mCount);
            console.log(sCount);
            setManagerCount(mCount);
            setStaffCount(sCount);
        } catch (error) {
            console.error('Error fetching user counts:', error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchData();
            return () => { };
        }, [fetchData])
    );

    const data = {
        labels: ['Manager', 'Staff'],
        datasets: [{
            data: [managerCount, staffCount]
        }]
    };

    const chartWidth = Dimensions.get('window').width * 0.9;

    const chartConfig = {
        backgroundColor: '#001122',
        backgroundGradientFrom: '#00152F',
        backgroundGradientTo: '#001F3F',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Employee Count</Text>
            <BarChart
                data={data}
                width={chartWidth}
                height={220}
                fromZero={true}
                chartConfig={chartConfig}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                showBarTops={false}
                withInnerLines={false}
                yAxisLabel={''}
                horizontal={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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

export default RingGraph;
