import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
import FuelOrderCard from '../../components/ManagerComponents/FuelOrderCard';
import FuelOrderFormModal from '../../components/ManagerComponents/FuelOrderFormModal';

const FuelOrder = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const orders = [
                { id: '1', status: 'Delivered', dateOfOrder: '2022-08-21' },
                { id: '2', status: 'Ordered', dateOfOrder: '2022-08-20' },
                { id: '3', status: 'Delivered', dateOfOrder: '2022-08-21' },
                { id: '4', status: 'Ordered', dateOfOrder: '2022-08-20' },
                { id: '5', status: 'Delivered', dateOfOrder: '2022-08-21' },
                { id: '6', status: 'Ordered', dateOfOrder: '2022-08-20' },
                { id: '7', status: 'Delivered', dateOfOrder: '2022-08-21' },
                { id: '8', status: 'Ordered', dateOfOrder: '2022-08-20' },
                { id: '9', status: 'Delivered', dateOfOrder: '2022-08-21' },
                { id: '10', status: 'Ordered', dateOfOrder: '2022-08-20' },
                // ... more orders
            ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <ManagerScreenLayout navigation={navigation}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={toggleModal}>
                    <Icon name="cart-plus" size={33} color="#000" />
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Fuel Orders</Text>
            
            <FlatList
                data={orders}
                renderItem={({ item }) => (
                    <FuelOrderCard status={item.status} dateOfOrder={item.dateOfOrder} />
                )}
                keyExtractor={item => item.id}
            />

            <FuelOrderFormModal isVisible={isModalVisible} toggleModal={toggleModal} />
        </ManagerScreenLayout>
    );
}


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 15
    },
    heading: {
        color: '#000',
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 10
    }

});

export default FuelOrder;
