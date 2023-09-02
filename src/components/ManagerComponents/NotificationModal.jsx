import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import UserApi from '../../services/UserApi';
import FuelInventoryApi from '../../services/FuelInventoryApi';
import { useFocusEffect } from '@react-navigation/native';



const NotificationModal = ({ isVisible, onDismiss }) => {
    const [requests, setRequests] = useState([]);
    const [managerId, setManagerId] = useState(null);

    useFocusEffect(
        useCallback(() => {
          const fetchManagerDetails = async () => {
            try {
              const userDetails = await UserApi.fetchUserDetails();
              setManagerId(userDetails.id);
            } catch (error) {
              console.error("Failed fetching user details:", error);
            }
          };
  
          fetchManagerDetails();
          
          if (managerId) {
            const fetchRequests = async () => {
              try {
                const requestData = await FuelInventoryApi.getFuelRequests(managerId);
                setRequests(requestData.reverse());
              } catch (error) {
                console.error("Failed fetching fuel requests:", error);
              }
            };
  
            fetchRequests();
          }
        }, [managerId])
      );
  

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={onDismiss}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>Fuel Fill Requests</Text>
          <FlatList
            data={requests}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text style={styles.text}>
                {item.requestBy.name} requests fuel refill for {item.requestBy.bunk.name}
              </Text>
            )}
          />
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgb(238, 242, 251)',
        height: '50%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
    },
    heading: {
        color: '#001F3F',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 20,
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
      },
      text: {
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
        color:'#001F3F',
      }
});

export default NotificationModal;
