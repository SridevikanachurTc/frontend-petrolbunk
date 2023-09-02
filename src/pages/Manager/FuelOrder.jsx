import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
import FuelOrderCard from '../../components/ManagerComponents/FuelOrderCard';
import FuelOrderFormModal from '../../components/ManagerComponents/FuelOrderFormModal';
import FuelOrderDetailsModal from '../../components/ManagerComponents/FuelOrderDeatilsModal';
import OrderApi from '../../services/OrderApi';
import FuelInventoryApi from '../../services/FuelInventoryApi';

const FuelOrder = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isOrderModalVisible, setOrderModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const amount = 100.0;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await OrderApi.getOrders();

        setOrders(fetchedOrders);
        console.log(orders);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderPress = order => {
    setSelectedOrder(order);
    setOrderModalVisible(true);
  };

  const toggleOrderModal = () => {
    setSelectedOrder(null);
    setOrderModalVisible(!isOrderModalVisible);
  };

  

  const handleDeleteOrder = async orderId => {
    try {
      await OrderApi.deleteOrder(orderId);
      console.log('deleted order');
      // Remove the order from the local state:
      setOrders(orders => orders.filter(order => order.id !== orderId));
      toggleOrderModal();
    } catch (error) {
      console.error('Failed to delete order:', error);
    }
  };

  const handleUpdateOrder = async (orderId, newQuantity) => {
    try {
      // Fetch the current fuel inventory:
      const fuelInventoryData = await FuelInventoryApi.getFuelInventory();
      const fuelLevel = fuelInventoryData.fuelInventory.inventoryLevel;
      const maxCapacity = fuelInventoryData.fuelInventory.inventoryCapacity;

      // Check if the new quantity plus the current fuel level exceeds max capacity:
      if (Number(newQuantity) + Number(fuelLevel) > Number(maxCapacity)) {
        alert('Max fuel quantity exceeds! Please enter a smaller amount.');
        return;
      }

      const orderAmount = amount * newQuantity;
      await OrderApi.updateOrder(orderId, {
        orderQuantity: newQuantity,
        orderAmount: orderAmount,
      });
      console.log('neworder quantity successfully updataed');

      // Update the order in the local state:
      setOrders(orders =>
        orders.map(order => {
          if (order.id === orderId) {
            return {
              ...order,
              orderQuantity: newQuantity,
              orderAmount: orderAmount,
            };
          }
          toggleOrderModal();
          return order;
        }),
      );
    } catch (error) {
      console.error('Failed to update order:', error);
    }
  };

  // const orders = [
  //   {
  //     id: '1',
  //     status: 'Delivered',
  //     dateOfOrder: '2022-08-21',
  //     quantity: '10000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '2',
  //     status: 'Processing',
  //     dateOfOrder: '2022-08-20',
  //     quantity: '20000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '3',
  //     status: 'Delivered',
  //     dateOfOrder: '2022-08-21',
  //     quantity: '10000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '4',
  //     status: 'Ordered',
  //     dateOfOrder: '2022-08-20',
  //     quantity: '50000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '5',
  //     status: 'Processing',
  //     dateOfOrder: '2022-08-21',
  //     quantity: '10000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '6',
  //     status: 'Ordered',
  //     dateOfOrder: '2022-08-20',
  //     quantity: '10000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '7',
  //     status: 'Delivered',
  //     dateOfOrder: '2022-08-21',
  //     quantity: '15000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '8',
  //     status: 'Ordered',
  //     dateOfOrder: '2022-08-20',
  //     quantity: '18000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '9',
  //     status: 'Delivered',
  //     dateOfOrder: '2022-08-21',
  //     quantity: '12000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '10',
  //     status: 'Ordered',
  //     dateOfOrder: '2022-08-20',
  //     quantity: '10000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '11',
  //     status: 'Ordered',
  //     dateOfOrder: '20232-08-20',
  //     quantity: '21000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '12',
  //     status: 'Ordered',
  //     dateOfOrder: '2022-08-20',
  //     quantity: '10000',
  //     amount: '100000000',
  //   },
  //   {
  //     id: '13',
  //     status: 'Ordered',
  //     dateOfOrder: '2022-08-20',
  //     quantity: '10000',
  //     amount: '100000000',
  //   },
  //   // ... more orders
  // ];

  // Sort the orders based on their status
  const sortedOrders = orders.sort((a, b) => {
    if (a.status === 'Ordered' && b.status !== 'Ordered') return -1;
    if (a.status !== 'Ordered' && b.status === 'Ordered') return 1;

    if (a.status === 'Processing' && b.status !== 'Processing') return -1;
    if (a.status !== 'Processing' && b.status === 'Processing') return 1;

    if (a.status === 'Delivered' && b.status !== 'Delivered') return -1;
    if (a.status !== 'Delivered' && b.status === 'Delivered') return 1;

    return 0;
  });

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  const toggleModal = async () => {
    setModalVisible(!isModalVisible);
  
    if (isModalVisible) {
      // If the modal is about to close, fetch orders
      const updatedOrders = await OrderApi.getOrders();
      setOrders(updatedOrders);
    }
  };

  return (
    <ManagerScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>FUEL ORDER LIST</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="cart-plus" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            data={sortedOrders}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleOrderPress(item)}>
                <FuelOrderCard orders={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{height: 130}} />}
          />
          <FuelOrderFormModal
            isVisible={isModalVisible}
            toggleModal={toggleModal}
            amount={amount}
          />
          <FuelOrderDetailsModal
            isVisible={isOrderModalVisible}
            order={selectedOrder}
            onClose={toggleOrderModal}
            onEditPress={handleUpdateOrder}
            onDeletePress={handleDeleteOrder}
          />
        </View>
      </View>
    </ManagerScreenLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  container: {
    backgroundColor: 'rgb(238, 242, 251)',
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 3,
    paddingTop: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FuelOrder;
