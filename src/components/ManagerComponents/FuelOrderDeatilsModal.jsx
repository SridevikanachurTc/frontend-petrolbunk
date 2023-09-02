import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const FuelOrderDetailsModal = ({ isVisible, order, onClose, onEditPress, onDeletePress }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newQuantity, setNewQuantity] = useState('');

  const handleSave = async () => {
      if(onEditPress) {
          await onEditPress(order.id, newQuantity);
      }
      setIsEditing(false);
      setNewQuantity('');
  };

    if (!order) return null;

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={styles.modal}
        >
            <View style={styles.container}>
            <Text style={styles.heading}>Fuel Order Details</Text>
                <View style={styles.row}>
            <Icon style={styles.icon} name="address-card" size={22} color="#001F3F" />
            <Text style={styles.text}>{order.id}</Text>
          </View>
          <View style={styles.row}>
                    <Icon style={styles.icon} name="tachometer" size={24} color="#001F3F" />
                    {isEditing ? (
                        <TextInput
                            value={newQuantity}
                            onChangeText={setNewQuantity}
                            keyboardType="numeric"
                    style={styles.input}
                        />
                    ) : (
                        <Text style={styles.text}>{order.orderQuantity}</Text>
                    )}
                </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="truck" size={24} color="#001F3F" />
            <Text style={styles.text}>{order.orderStatus}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="calendar" size={22} color="#001F3F" />
            <Text style={styles.text}>{order.orderDate}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="money" size={22} color="#001F3F" />
            <Text style={styles.text}>{order.orderAmount}</Text>
          </View>
          { (order.orderStatus === 'ORDERED') && (
                    <View style={styles.actionIcons}>
                        {isEditing ? (
                            <Icon style={styles.icon} name="save" size={24} onPress={handleSave} color="#001F3F" />
                        ) : (
                            <Icon style={styles.icon} name="edit" size={24} onPress={() => setIsEditing(true)} color="#001F3F" />
                        )}
                        <Icon style={styles.icon} name="trash" size={24} onPress={() => onDeletePress(order.id)} color="#001F3F" />
                    </View>
                )}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    },
    container: {
        backgroundColor: 'white',
        height: '60%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
    },
    heading: {
        color: '#001F3F',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
      },
      input: {
        elevation: 5,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      actionIcons:{
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center'
      },
      icon: {
        paddingLeft: 15,
      },
      text: {
        fontSize: 18,
        padding: 10,
        fontWeight: '500',
        color:'#001F3F'
      }
});

export default FuelOrderDetailsModal;
