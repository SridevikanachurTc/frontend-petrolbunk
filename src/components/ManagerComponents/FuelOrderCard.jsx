import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FuelOrderCard = ({ orders }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{orders.id}</Text>
            <Text style={styles.text}>{orders.orderQuantity}Liters</Text>
            <Text style={styles.text}>{orders.orderStatus}</Text>
            {/* id, quantity, status */}
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
    borderRadius: 8,
    backgroundColor: '#fff',
    width: 350,
    elevation: 4,
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001F3F'
    }
});

export default FuelOrderCard;
