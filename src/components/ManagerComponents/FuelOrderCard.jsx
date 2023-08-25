import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FuelOrderCard = ({ status, dateOfOrder }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{status}</Text>
            <Text style={styles.text}>{dateOfOrder}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
    padding: 16,
    marginLeft: 1,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '99%',
    elevation: 4,
    },
    text:{
        marginLeft: 30,
        marginRight: 30
    }
});

export default FuelOrderCard;
