import React, { useCallback, useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import ManagerGraphApi from '../services/ManagerGraphApi';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ManagerRingGraph() {
    const [morningShiftCount, setMorningShiftCount] = useState(0);
    const [eveningShiftCount, setEveningShiftCount] = useState(0);
    const [nightShiftCount, setNightShiftCount] = useState(0);

    const fetchData = useCallback(async () => {
        try {
            const bunkId = await AsyncStorage.getItem('bunkId');
            const mCount = await ManagerGraphApi.getMorningShiftCount(bunkId);
            const eCount = await ManagerGraphApi.getEveningShiftCount(bunkId);
            const nCount = await ManagerGraphApi.getNightShiftCount(bunkId);

            console.log(mCount, eCount, nCount);

            setMorningShiftCount(mCount);
            setEveningShiftCount(eCount);
            setNightShiftCount(nCount);

        } catch (error) {
            console.error('Error fetching shift counts:', error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchData();
            return () => { };
        }, [fetchData])
    );

    const data = {
        labels: ['Morning', 'Evening', 'Night'],
        datasets: [{
            data: [morningShiftCount, eveningShiftCount, nightShiftCount]
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
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Staff Shift Count in %</Text>
            <BarChart
                data={data}
                width={chartWidth}
                height={220}
                chartConfig={chartConfig}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                showValuesOnTopOfBars
                withHorizontalLabels
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

export default ManagerRingGraph;
