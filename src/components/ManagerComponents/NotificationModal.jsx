import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import UserApi from '../../services/UserApi';
import FuelInventoryApi from '../../services/FuelInventoryApi';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';



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
          <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.columnHeader}>Requested By</Text>
            <Text style={styles.columnHeader}>Date</Text>
          </View>
          <FlatList
            data={requests}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.columnText}>{item.requestBy.name}</Text>
                <Text style={styles.columnText}>{moment(item.requestedAt).format('DD/MM/YYYY')}</Text>
              </View>
            )}
          />
        </View>
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
    table: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      overflow: 'hidden',
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
      tableHeader: {
        flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    opacity: 0.7,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#808F9F',
    paddingVertical: 8,
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderBottomWidth: 1,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: '#ccc',
      paddingVertical: 8,
    },
    columnHeader: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#001F3F',
    },
    columnText: {
      flex: 1,
      textAlign: 'center',
      color: '#001F3F',
    }
});

export default NotificationModal;
